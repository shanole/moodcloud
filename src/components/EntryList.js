import React, { useState, useEffect } from 'react';
import Entry from './Entry';
import { useFirestore } from 'react-redux-firebase'

function EntryList() {
  const firestore = useFirestore();

  const getFirstBatch = async () => {
    try {
      const data = await firestore 
        .collection('entries')
        .orderBy('timestamp', 'desc')
        .limit(3)
        .get();
      
      let entries = [];
      let lastKey = "";
      data.forEach( (doc) => {
        entries.push(doc.data());
        lastKey = doc.data().timestamp;
      });
      return { entries , lastKey }
    } catch(e) {
      console.log(e)
    }
  }

  const getNextBatch = async (key) => {
    try {
      const data = await firestore 
        .collection('entries')
        .orderBy('timestamp', 'desc')
        .startAfter(key)
        .limit(3)
        .get();
      
      let entries = [];
      let lastKey = "";
      data.forEach( (doc) => {
        entries.push(doc.data())
        lastKey = doc.data().timestamp;
      });
      return { entries, lastKey }
    } catch(e) {
      console.log(e)
    }
  }

  const [loadedEntries, setLoadedEntries] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [loading, setLoading] = useState (false);

  useEffect( () => {
    getFirstBatch()
      .then( (res) => {
        setLoadedEntries(res.entries);
        setLastKey(res.lastKey)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
  )

}

export default EntryList;