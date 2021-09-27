import React, { useState } from 'react';
import Entry from './Entry';
import { useFirestore } from 'react-redux-firebase'

function EntryList() {

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
  }

  const getNextBatch = async (key) => {
    console.log('getNextBatch called!!')
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
      return { entries, lastKey }
    } catch(e) {
      console.log(e)
    }
  }

  const [loadedEntries, setLoadedEntries] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [loading, setLoading] = useState (false);
  const [firstRender, setFirstRender] = useState(true);
  const [listeners, setListeners] = useState(null);

  const attachListener = () => {
    let listener = firestore.collection('entries').orderBy('timestamp', 'desc').limitToLast(loadedEntries.length > 0 ? loadedEntries.length : 2).onSnapshot((docs) => {
      console.log('change detected by listener')
      const newList = docs.map((doc) => {doc.data()});
      console.log('newLIst in listener', newList)
      setLoadedEntries(newList);
    })
    setListeners(listener);
  }

  const detachListener = () => {
    setListeners(listeners());
  }

  useEffect( () => {
    getFirstBatch()
      .then( (res) => {
        setLoadedEntries(res.entries);
        setLastKey(res.lastKey)
        attachListener();
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

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
        <button>See More</button>
      </div>
    )


  return(<div></div>);
  }
}

export default EntryList;