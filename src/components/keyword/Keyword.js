import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showKeyword } from '../../actions';
import { useFirestore } from 'react-redux-firebase';
import KeywordPill from './styles/KeywordPill';
import PropTypes from "prop-types";

function Keyword(props) {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.firebase.auth);
  const [rating, setRating] = useState(null);

  const goToKeywordDetails = (keyword) => {
    var keywordRef = firestore.collection('keywords').doc(auth.uid).collection('userKeywords').doc(keyword);
    keywordRef.get().then((doc) => {
      const action = showKeyword(doc.data());
      dispatch(action);
    })
  }

  firestore.collection('keywords').doc(auth.uid).collection('userKeywords').doc(props.keywordData.text).get().then(
    doc => {
      if (doc.exists) {
        setRating(Math.round(doc.data().avgRating));
      }
  })

  return (
    <div onClick={() => goToKeywordDetails(props.keywordData.text)}>
      <KeywordPill rating = {rating}>
        <div className='pill-bg'>
          <div className='pill-text'>{props.keywordData.text}</div>
        </div>
      </KeywordPill>
    </div>
  );
}

Keyword.propTypes = {
  keywordData: PropTypes.object
}

export default Keyword;