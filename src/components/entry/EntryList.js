// for some reason it doesn't rerender when u delete the last post??
// also as soon as you make an edit, the whole collection loads

import React, { useState, useEffect, useCallback } from 'react';
import Entry from './Entry';
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux';
import StyledEntryList from './styles/StyledEntryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EntryList(props) {
  const firestore = useFirestore();

  const auth = useSelector(state => state.firebase.auth);

  const { keyword, limit } = props;
  
  const [loadedEntries, setLoadedEntries] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [loading, setLoading] = useState (false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [scrollUpVisible, setScrollUpVisible] = useState(false);

  const getFirstBatch = useCallback(
    async () => {
      try {
        let data;
        if (keyword !== undefined) {
          data =  firestore
            .collection('entries')
            .where('uuid', '==', auth.uid)
            .where('keywords','array-contains',{id: keyword, text: keyword})
            .orderBy('timestamp','desc')
            .limit(limit)
        } else {
          data = firestore 
            .collection('entries')
            .where('uuid', '==', auth.uid)
            .orderBy('timestamp', 'desc')
            .limit(limit)
        }      
        let entries = [];
        let lastKey = "";
        const docs = await data.get();
        docs.forEach( (doc) => {
          entries.push({
            uuid: auth.uid,
            id: doc.id,
            blurb:doc.data().blurb,
            rating: doc.data().rating,
            keywords: doc.data().keywords,
            timestamp: doc.data().timestamp,
            timePosted: doc.data().timePosted
          })
          lastKey = doc.data().timestamp;
        });
      return { entries , lastKey }
    } catch(e) {
      console.log(e)
    }
    }, [firestore, keyword, limit, auth.uid]
  )

  const getNextBatch = async (key) => {
    try {
      let data;
      if (keyword !== undefined) {
        data = firestore
          .collection('entries')
          .where('uuid', '==', auth.uid)
          .where('keywords','array-contains',{id: keyword, text: keyword})
          .orderBy('timestamp','desc')
          .startAfter(key)
          .limit(limit)
      } else {
        data = firestore 
          .collection('entries')
          .where('uuid', '==', auth.uid)
          .orderBy('timestamp', 'desc')
          .startAfter(key)
          .limit(limit)
      }
    
      let entries = [];
      let lastKey = "";
      const docs = await data.get();
        docs.forEach( (doc) => {
          entries.push({
            uuid: auth.uid,
            id: doc.id,
            blurb:doc.data().blurb,
            rating: doc.data().rating,
            keywords: doc.data().keywords,
            timestamp: doc.data().timestamp,
            timePosted: doc.data().timePosted
          })
          lastKey = doc.data().timestamp;
      })
      return { entries, lastKey }
    } catch(e) {
      console.log(e)
    }
  }

  useEffect( () => {
    if (firstLoad) {
      getFirstBatch()
        .then( (res) => {
          setLoadedEntries(res.entries);
          setLastKey(res.lastKey)
        })
        .catch(err => {
          console.log(err)
        })
        setFirstLoad(false);
    }
    }, [firstLoad, getFirstBatch])

  useEffect(() => {
    const currentLoadedPosts = (loadedEntries.length > 0) ? loadedEntries.length : 2;
    let data;
      if (keyword !== undefined) {
        data = firestore
          .collection('entries')
          .where('uuid', '==', auth.uid)
          .where('keywords','array-contains',{id: keyword, text: keyword})
          .orderBy('timestamp','desc')
          // .limit(currentLoadedPosts)
      } else {
        data = firestore 
          .collection('entries')
          .where('uuid', '==', auth.uid)
          .orderBy('timestamp', 'desc')
          // .limit(currentLoadedPosts)
      }

    const unsubscribe = data.onSnapshot( snapshot => {
        if (snapshot.docChanges()) {
          let newList = []
          snapshot.forEach((doc) => { 
            newList.push ({
                uuid: auth.uid,
                id: doc.id,
                blurb:doc.data().blurb,
                rating: doc.data().rating,
                keywords: doc.data().keywords,
                timestamp: doc.data().timestamp,
                timePosted: doc.data().timePosted })
          });
          setLoadedEntries(newList);
          setLastKey(null);
        }
      })
      return () => {
      unsubscribe();
    }
  }, [keyword, limit, firestore, auth.uid])

  const fetchMorePosts = (key) => {
      if (key !== "") {
        setLoading(true);
        getNextBatch(key)
          .then( (res) => {
            setLastKey(res.lastKey);
            setLoadedEntries(loadedEntries.concat(res.entries));
            setLoading(false);
          })
          .catch(err => {
            console.log(err);
            setLoading(false);
          });
      }
    }

  const backToTop = () => {
    document.getElementById('list').scrollTo({top: 0, behavior: 'smooth'})
  }

  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;

    if (event.target.scrollTop > 205) {
      setScrollUpVisible(true);
    } else if (event.target.scrollTop <= 205) {
      setScrollUpVisible(false);
    }
    if (bottom) {
      fetchMorePosts(lastKey)
    }
  }

  const allPosts = (
    <div id='list' onScroll={handleScroll}>
        {loadedEntries.map( entry => {
          return <Entry key={entry.id} entryContent={entry}/>
        })}
        {loading ? (<p>Loading...</p>
      ) : lastKey !== "" && lastKey !== undefined && lastKey != null ? (null) : (
        "All entries loaded"
        )}
      </div>
    )

    return(
      <StyledEntryList>
      
      {allPosts}
      {scrollUpVisible && (<button className='scroll-up' onClick={backToTop}><FontAwesomeIcon icon='long-arrow-alt-up'/></button>)}
    </StyledEntryList>
    );
}


export default EntryList;