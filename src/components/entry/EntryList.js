import React, { useState, useEffect, useCallback } from 'react';
import Entry from './Entry';
import { useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux';

function EntryList(props) {
  const firestore = useFirestore();

  const auth = useSelector(state => state.firebase.auth);

  const { keyword, limit } = props;
  
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
    }, [firestore, keyword, limit]
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

  const [loadedEntries, setLoadedEntries] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [loading, setLoading] = useState (false);
  const [firstLoad, setFirstLoad] = useState(true);

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
    const currentLoadedPosts = loadedEntries.length > limit ? loadedEntries.length : limit;
    let data;
      if (keyword !== undefined) {
        data = firestore
          .collection('entries')
          .where('uuid', '==', auth.uid)
          .where('keywords','array-contains',{id: keyword, text: keyword})
          .orderBy('timestamp','desc')
          .limit(currentLoadedPosts)
      } else {
        data = firestore 
          .collection('entries')
          .where('uuid', '==', auth.uid)
          .orderBy('timestamp', 'desc')
          .limit(currentLoadedPosts)
      }   
    const unsubscribe = data.onSnapshot( snapshot => {
        if (snapshot.size) {
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
        }
      })
    return () => {
      unsubscribe()
    }
  }, [keyword, limit, loadedEntries.length, firestore])

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
    getFirstBatch()
      .then( (res) => {
        setLoadedEntries(res.entries);
        setLastKey(res.lastKey)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom) {
      fetchMorePosts(lastKey)
    }
  }

  const allPosts = (
    <div onScroll={handleScroll} style={{height: "500px", overflowY: "auto"}}>
        {loadedEntries.map( entry => {
          return <Entry key={entry.id} entryContent={entry}/>
        })}
      </div>
    )
    
  return(
    <React.Fragment>
      
      {allPosts}
      {loading ? (<p>Loading...</p>
      ) : lastKey !== "" && lastKey !== undefined ? (null) : (
        <button onClick={backToTop}>back to top</button>
      )}
      
    </React.Fragment>
    );
}


export default EntryList;