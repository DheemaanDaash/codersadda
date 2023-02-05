import React, { useState } from 'react';
import styles from './Profile.css';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import github from './github.png';
import reddit from './reddit.png';
import facebook from './facebook.png';
import { useParams, useHistory } from 'react-router-dom';

// import FavoriteIcon from '@material-ui/icons/Favorite';

<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"/>

const Profile = () => {
  const [name,setName]=useState("")
  const [allData,setAllData]=useState([])
  const [show,setShow]=useState(false)
  const [editIndex,setEditIndex]=useState()
  const dispatch = useDispatch();
    const { isAuth, user } = useSelector((state) => state.auth);
    
  const handleAdd=()=>{
      if(name.length!==0){
      setAllData(newData=>[...newData,name])
      setName("")
      }
  }

  const handleDelete=(index)=>{
      allData.splice(index,1)
      setAllData([...allData])
  }

  const handleEdit=(i)=>{
      setName(allData[i])
      setShow(true)
      setEditIndex(i)
  }
  const handleUpdate=()=>{
      allData.splice(editIndex,1,name)
      setAllData([...allData])
      setShow(false)
      setName("")
  }
  const history = useHistory();
  const handManualLeave = () => {
    history.push('/rooms');
  };

    return (
        <div className="bio">
                <div>
                <button onClick={handManualLeave} className="goBack">
                    <img src="/images/arrow-left.png" alt="arrow-left" />
                    <span>Profile Information</span>
                </button>
            </div>
                <div className="roomsHeader">
                    <div className="left">
                        <div className="avatar-container">
                            <img className="avatar" src={user?.avatar} />
                        </div>
                        <div className="info-container">
                            <h3 className="username">{user?.name}</h3>
                            <button className="messagebtn">Message</button>
                        </div>
                    </div>
                </div>
                <div class="social-icons, left">
                    <a href="https://github.com/CodersAdda/" class="icon">
                        <img src={github} alt="github" />
                    </a>
                    <a href="https://www.reddit.com/CodersAdda/" class="icon">
                        <img src={reddit} alt="reddit" />
                    </a>
                    <a href="https://www.facebook.com/CodersAdda/" class="icon">
                    <img src={facebook} alt="facebook" />
                    </a>
                </div>
                <div>
                    <h3><br/>Add Your Bio</h3>
                    <textarea className="input-bio" value={name} onChange={(e) => setName(e.target.value)} > <br />
                    </textarea>
                    <br />
                    {!show ? <button className="addbtn" onClick={handleAdd}>Add</button> :
                        <button className="updatebtn" onClick={handleUpdate}>Update</button>}

                    {allData.map((val, i) => <div className="biopart">
                        <p className="biotxt"><br/><br/>🙌{val}</p>
                        <button className="editbtn" onClick={() => handleEdit(i)}>
                            <span class="material-icons-outlined">Edit</span>
                        </button>
                        <button className="deletebtn" onClick={() => handleDelete(i)}>
                            <span class="material-icons-outlined">Delete</span>
                        </button>
                    </div>
                    )}
                </div>
                
                
            </div>
    );
};

export default Profile;