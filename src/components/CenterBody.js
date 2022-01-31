import { React, useEffect, useState } from "react";
import db from '../firebase-config'
import { collection, getDocs, getDoc, onSnapshot, doc, deleteDoc } from '@firebase/firestore'
import "../css/centerbody.css";
import { useRef } from "react";
import RequestPosting from "./RequestPosting";
import NewRequest from "./NewRequest";
import Select from 'react-select'
import Loading from 'react-loading'

const CenterBody = () => {


  ///this section fetches the requestsList from the db
  const [loading, setLoading] = useState(false)
  const reqRef = collection(db, "requestsList");
  const [reqList, setReqList] = useState([]);



  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      const reqDoc = doc(db, "requestsList", id);
      await deleteDoc(reqDoc)
      window.location.reload();
    }


  }





  const fetchreqList = async () => {
    setLoading(true)
    const data = await getDocs(reqRef)
    const holderArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    const sortedHolderArray = holderArray.sort((a, b) => b.date - a.date)
    setReqList(sortedHolderArray)
    setLoading(false)
    console.log(reqList)
  }


  const items = [];

  // const fetchReqs = async () => {
  //   setLoading(true);
  //   const reqsFromDB = db.collection('requestsList').onSnapshot(snapshot => {
  //     snapshot.forEach(doc => {
  //       items.push({ ...doc.data(), key: doc.id });
  //     });

  //   });
  //   setReqList(items);
  //   setLoading(false);
  //   console.log(reqList)

  // };


  //////end of section////////













  ////////////////////////////////////////////////////////////////////////////////
  const dailyData = reqList;
  const [jsonData, setJsonData] = useState(reqList);
  const [isFilterOn, setIsFilterOn] = useState(false)
  const [showInQuestion, setShowInQuestion] = useState(null)
  //////////////////////////////////////////////////////////////////////////////////////



  //this fetches the showlist from the db///////////////////////////////////////////// 
  const showRef = collection(db, "showList");
  const [shows, setShows] = useState([])

  const fetchShowList = async () => {
    const data = await getDocs(showRef)
    setShows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  }
  /////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchreqList()
    fetchShowList()
  }, [])
  let showList = shows


  //this checks if a filter is on
  // const checkShows = (x, y) => {
  //   x.length === y.length ? setIsFilterOn(false) : setIsFilterOn(true)
  // }

  // this filters the show by showID
  const filterShows = async (e) => {
    setLoading(true)

    setIsFilterOn(true)
    setShowInQuestion(e.value)
    let reqListCopy = reqList
    let tester = reqList.filter(request => request.showid.toLowerCase() === e.showID.toLowerCase());
    await setReqList(tester);
    setLoading(false)

  }

  // this will handle the clear filter button, once the show filters are on
  const handleFilterClear = (e) => {
    e.preventDefault()
    setIsFilterOn(false)
    fetchreqList()

  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(jsonData);
  };
  const [searchquery, setSearchQuery] = useState(null);
  const [searchedArray, setSearchedArray] = useState(null)
  const searchRef = useRef();
  const filterRef = useRef();
  const top = useRef();

  const handleSearch = e => {
    setSearchQuery(searchRef.current.value)
    console.log(searchquery);
    console.log(reqList.filter(show => show.hed.toLowerCase().includes(searchquery.toLowerCase().toString())))



  };

  const [isNewRequestMade, setIsNewRequestMade] = useState(false);
  const handleNewRequest = (e) => {
    e.preventDefault();
    if (!isNewRequestMade) {
      console.log('new request made')
      setIsNewRequestMade(true);
    }
    else {
      setIsNewRequestMade(false);
      console.log('closing request')
    }
  }

  const handleScroll = (e) => {
    e.preventDefault();
    top.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  return (
    <div className="requestcontainer">

      <div className="requestheader">

        <Select clearvalue={handleFilterClear} onChange={(e) => filterShows(e)} ref={filterRef} placeholder={'Filter'} options={showList} />
        {isFilterOn ? <button onClick={handleFilterClear}>Clear Filter</button> : ''}

        <div>
          <input ref={searchRef} placeholder="Search Piqué" type='search' onChange={handleSearch} />
        </div>

      </div>
      <div className="buttondiv"><button onClick={handleNewRequest} id='requestbutton'>New</button></div>

      {isNewRequestMade ? <NewRequest showList={showList} handleNewRequest={handleNewRequest} onClick={handleNewRequest} /> : ''}
      <br />
      {isFilterOn && reqList.length == 0 ? <div>No requests found for <b>{showInQuestion}</b></div> : ''}
      <div className="requestsholder">
        {loading ?
          <div className="spinnerholder"><Loading width={'50px'} color='white' />
          </div> : <div>
            {reqList.map(info => (
              <RequestPosting
                handleDelete={handleDelete}
                info={info}
              />
            ))}</div>}
      </div>

    </div>
  );
};

export default CenterBody;
{/* <RequestPosting
  info={info}
/> */}