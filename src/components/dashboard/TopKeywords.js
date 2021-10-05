import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Keyword from './../keyword/Keyword';

function TopKeywords(props) {
  const { timespan } = props;

  const [keywords, setKeywords] = useState([]);

  const auth = useSelector(state => state.firebase.auth);

  useFirestoreConnect({collection: 'entries', storeAs: 'data', orderBy: ['timestamp', 'desc'], where: ['uuid','==',auth.uid], ...(timespan && {limit: timespan})} );
  const data = useSelector(state => state.firestore.ordered.data);

  useEffect(() => {
    if (isLoaded(data) && !isEmpty(data)) {
      const sortedKeywords = sortByFrequency(data);
      console.log(sortedKeywords);
      setKeywords(sortedKeywords);
    }
  }, []);

  const sortByFrequency = (arr) => {
    let keywordFreq = {};
    arr.forEach((entry) => {
      entry.keywords.forEach((keyword) => {
        let keywordText = keyword.text;
        if (keywordText in keywordFreq) {
          keywordFreq[keywordText] ++;
        } else {
          keywordFreq[keywordText] = 1;
        }
      })
    });

    let sortedList = [];

    for (var key in keywordFreq) {
      sortedList.push(key);
    }

    sortedList.sort( (a,b) =>  keywordFreq[b]- keywordFreq[a]);

    return sortedList;
  }

  console.log(keywords);

  return (
    keywords.map((keyword, index) => <Keyword key={index} keywordData={{id: keyword, text: keyword}} />)
  );
}

export default TopKeywords;