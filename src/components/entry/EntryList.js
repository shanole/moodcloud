import React, { useState, useEffect, useCallback } from 'react';
import Entry from './Entry';
import { useFirestore } from 'react-redux-firebase'

function EntryList(props) {
  const firestore = useFirestore();
  
  const { keyword, limit } = props;
  
  const getFirstBatch = useCallback(
    async () => {
      try {
        let data;
        if (keyword !== undefined) {
          data =  firestore
            .collection('entries')
            .where('keywords','array-contains',{id: keyword, text: keyword})
            .orderBy('timestamp','desc')
            .limit(limit)
        } else {
          data = firestore 
            .collection('entries')
            .orderBy('timestamp', 'desc')
            .limit(limit)
        }      
        let entries = [];
        let lastKey = "";
        const docs = await data.get();
        docs.forEach( (doc) => {
          entries.push({
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
          .where('keywords','array-contains',{id: keyword, text: keyword})
          .orderBy('timestamp','desc')
          .startAfter(key)
          .limit(limit)
      } else {
        data = firestore 
          .collection('entries')
          .orderBy('timestamp', 'desc')
          .startAfter(key)
          .limit(limit)
      }
    
      let entries = [];
      let lastKey = "";
      const docs = await data.get();
        docs.forEach( (doc) => {
          entries.push({
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
          .where('keywords','array-contains',{id: keyword, text: keyword})
          .orderBy('timestamp','desc')
          .limit(currentLoadedPosts)
      } else {
        data = firestore 
          .collection('entries')
          .orderBy('timestamp', 'desc')
          .limit(currentLoadedPosts)
      }   
    const unsubscribe = data.onSnapshot( snapshot => {
        if (snapshot.size) {
          let newList = []
          snapshot.forEach((doc) => { 
            newList.push ({
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

  const allPosts = (
    <div style={{height: "500px", overflowY: "auto"}}>
        {loadedEntries.map( entry => {
          return <Entry key={entry.id} entryContent={entry}/>
        })}
      </div>
    )
  return(
    <React.Fragment>
      <button onClick={backToTop}>back to top</button>
      {allPosts}
      {loading ? (<p>Loading...</p>
      ) : lastKey !== "" && lastKey !== undefined ? (<button onClick={() => fetchMorePosts(lastKey)}>more</button>
      ) : (
      <p>No more</p>
      )}
    </React.Fragment>
    );
}


export default EntryList;