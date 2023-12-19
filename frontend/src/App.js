import RootLayout from './components/RootLayout';
import DepartmentComponent from './components/departments/DepartmentComponent';
import AdminSignin from './components/adminsignin/AdminSignin';
import StudentSignin from './components/studentsignin/StudentSignin';
import Admissions from './components/admissions/Admissions';
import AlumniRootlayout from './components/alumnisignin/AlumniRootlayout';
import AlumniData from './components/alumnisignin/AlumniData';
import AlumniSignin from './components/alumnisignin/AlumniSignin';
import Home from './components/home/Home';
import ListOfHolidays from './components/listofholidays/ListOfHolidays';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import DepartmentsRootlayout from './components/departments/DepartmentsRootlayout';
import AE from './components/departments/AE'
import CE from './components/departments/CE';
import CSBS from './components/departments/CSBS';
import CS_AIML from './components/departments/CS_AIML';
import CS_DS from './components/departments/CS_DS';
import CS_CYS from './components/departments/CS_CYS';
import CS_IoT from './components/departments/CS_IoT';
import CSE from './components/departments/CSE';
import ECE from './components/departments/ECE';
import EEE from './components/departments/EEE';
import EIE from './components/departments/EIE';
import IT from './components/departments/IT';
import ME from './components/departments/ME';
import Semester from './components/departments/Semester';
import StudentComplaints from './components/studentsignin/StudentComplaints';
import Mycomplaints from './components/studentsignin/Mycomplaints';
import StudentMidmarks from './components/studentsignin/StudentMidmarks';
import StudentSemresults from './components/studentsignin/StudentSemresults';
import MyMessage from './components/studentsignin/MyMessage'
import DepartmentMessage from './components/studentsignin/DepartmentMessage'
import MyProfile from './components/studentsignin/MyProfile'
import AdminComplaints from './components/adminsignin/AdminComplaints'
import AdminMessageCollege from './components/adminsignin/AdminMessageCollege'
import AdminMessageStudent from './components/adminsignin/AdminMessageStudent'
import AdminMidmarksNavbar from './components/adminsignin/AdminMidmarksNavbar'
import AdminProfile from './components/adminsignin/AdminProfile'
import AdminMIDSemester from './components/adminsignin/AdminMIDSemester';


import AdminResultsSemester from './components/adminsignin/AdminResultsSemester';
import StudentMidmarksComponent from './components/studentsignin/StudentMidmarksComponent';
import StudentResultsComponent from './components/studentsignin/StudentSemresultsComponent';
import { useState } from 'react';
import axios from 'axios';
import CollegeMessage from './components/studentsignin/CollegeMessage';
import AdminMessageDepartmentNavbar from './components/adminsignin/AdminMessageDepartmentNavbar';
import AdminMessageDepartmentDisplay from './components/adminsignin/AdminMessageDepartmentDisplay';
import AdminMessageStudentDisplay from './components/adminsignin/AdminMessageStudentDisplay';
import Attendance from './components/studentsignin/Attendance';
import 'video-react/dist/video-react.css';
import AdminMessageDepartment from './components/adminsignin/AdminMessageDepartment';
import FacultyComponet from './components/departments/Faculty/FacultyComponent';
import AlumniRegister from './components/alumnisignin/AlumniRegister';
import AlumniHome from './components/alumnisignin/AlumniHome';

import AlumniApplications from './components/adminsignin/AlumniApplications'
import AlumniProfile from './components/alumnisignin/AlumniProfile';
import AlumniSignedInHome from './components/alumnisignin/AlumniSignedInHome';
import AlumniEvents from './components/alumnisignin/AlumniEvents';
import AlumniEventsStudent from './components/studentsignin/AlumniEventsStudent';
import AlumniEventsAdmin from './components/adminsignin/AlumniEventsAdmin';



function App() {
  let Login=localStorage.getItem('Rollno')

  let Alumni=localStorage.getItem('AlumniID')

  let Admin=localStorage.getItem('AdminID')

  let [Dept,setDept]=useState('')

  if (Login!==undefined){
    axios.get(`http://127.0.0.1:5000/get/${Login}`).then(r=>setDept(r.data)).catch(err=>console.log(err))
  }



  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/admin',
          element:<AdminSignin/>,
          children:[
            {
              path:'',
              element:<AlumniEventsAdmin AdminID={Admin}/>
            },
            {
              path:'alumnievents',
              element:<AlumniEventsAdmin AdminID={Admin}/>
            },
            {
              path:'alumniapplications',
              element:<AlumniApplications/>
            },
            {
              path:'complaints',
              element:<AdminComplaints AdminID={Admin}/>
            },
            {
              path:'midmarks',
              // element:<AdminMidmarksNavbar AdminID={Admin}/>,
              children:[
                {
                  path:'IT',
                  // element:<AdminMidmarksNavbar Department='IT'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='IT' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='IT' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='IT' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='IT' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='IT' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='IT' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='IT' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='IT' Semester='8' />
                    }
                  ]
                },
                {
                  path:'AE',
                  // element:<AdminMidmarksNavbar Department='AE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='AE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='AE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='AE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='AE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='AE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='AE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='AE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='AE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CE',
                  // element:<AdminMidmarksNavbar Department='CE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='CE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='CE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='CE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='CE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='CE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='CE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='CE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='CE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CSBS',
                  // element:<AdminMidmarksNavbar Department='CSBS'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='CSBS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='CSBS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='CSBS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='CSBS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='CSBS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='CSBS' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='CSBS' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='CSBS' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CS-AIML',
                  // element:<AdminMidmarksNavbar Department='CS-AIML' no='yes'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='CS-AIML' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='CS-AIML' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='CS-AIML' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='CS-AIML' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='CS-AIML' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='CS-AIML' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-CYS',
                  // element:<AdminMidmarksNavbar Department='CS-CYS' no='yes'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='CS-CYS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='CS-CYS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='CS-CYS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='CS-CYS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='CS-CYS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='CS-CYS' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-DS',
                  // element:<AdminMidmarksNavbar Department='CS-DS' no='yes'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='CS-DS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='CS-DS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='CS-DS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='CS-DS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='CS-DS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='CS-DS' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-IoT',
                  // element:<AdminMidmarksNavbar Department='CS-IoT' no='yes'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='CS-IoT' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='CS-IoT' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='CS-IoT' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='CS-IoT' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='CS-IoT' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='CS-IoT' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CSE',
                  // element:<AdminMidmarksNavbar Department='CSE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='CSE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='CSE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='CSE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='CSE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='CSE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='CSE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='CSE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='CSE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'ECE',
                  // element:<AdminMidmarksNavbar Department='ECE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='ECE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='ECE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='ECE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='ECE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='ECE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='ECE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='ECE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='ECE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'EEE',
                  // element:<AdminMidmarksNavbar Department='EEE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='EEE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='EEE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='EEE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='EEE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='EEE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='EEE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='EEE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='EEE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'EIE',
                  // element:<AdminMidmarksNavbar Department='EIE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='EIE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='EIE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='EIE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='EIE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='EIE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='EIE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='EIE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='EIE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'ME',
                  // element:<AdminMidmarksNavbar Department='ME'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminMIDSemester Department='ME' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminMIDSemester Department='ME' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminMIDSemester Department='ME' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminMIDSemester Department='ME' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminMIDSemester Department='ME' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminMIDSemester Department='ME' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminMIDSemester Department='ME' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminMIDSemester Department='ME' Semester='8' />
                    }
                  ]
                },
              
          ]
            },
            {
              path:'results',
              // element:<AdminResultsNavbar AdminID={Admin}/>,
              children:[
                {
                  path:'IT',
                  // element:<AdminResultsComponent Department='IT'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='IT' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='IT' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='IT' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='IT' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='IT' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='IT' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='IT' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='IT' Semester='8' />
                    }
                  ]
                },
                {
                  path:'AE',
                  // element:<AdminResultsComponent Department='AE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='AE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='AE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='AE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='AE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='AE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='AE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='AE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='AE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CE',
                  // element:<AdminResultsComponent Department='CE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='CE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='CE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='CE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='CE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='CE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='CE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='CE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='CE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CSBS',
                  // element:<AdminResultsComponent Department='CSBS'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='CSBS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='CSBS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='CSBS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='CSBS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='CSBS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='CSBS' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='CSBS' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='CSBS' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CS-AIML',
                  // element:<AdminResultsComponent Department='CS-AIML' no='yes'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='CS-AIML' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='CS-AIML' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='CS-AIML' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='CS-AIML' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='CS-AIML' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='CS-AIML' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-CYS',
                  // element:<AdminResultsComponent Department='CS-CYS' no='yes'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='CS-CYS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='CS-CYS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='CS-CYS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='CS-CYS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='CS-CYS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='CS-CYS' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-DS',
                  // element:<AdminResultsComponent Department='CS-DS' no='yes'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='CS-DS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='CS-DS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='CS-DS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='CS-DS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='CS-DS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='CS-DS' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-IoT',
                  // element:<AdminResultsComponent Department='CS-IoT' no='yes'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='CS-IoT' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='CS-IoT' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='CS-IoT' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='CS-IoT' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='CS-IoT' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='CS-IoT' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CSE',
                  // element:<AdminResultsComponent Department='CSE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='CSE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='CSE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='CSE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='CSE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='CSE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='CSE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='CSE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='CSE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'ECE',
                  // element:<AdminResultsComponent Department='ECE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='ECE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='ECE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='ECE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='ECE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='ECE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='ECE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='ECE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='ECE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'EEE',
                  // element:<AdminResultsComponent Department='EEE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='EEE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='EEE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='EEE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='EEE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='EEE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='EEE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='EEE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='EEE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'EIE',
                  // element:<AdminResultsComponent Department='EIE'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='EIE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='EIE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='EIE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='EIE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='EIE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='EIE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='EIE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='EIE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'ME',
                  // element:<AdminResultsComponent Department='ME'/>,
                  children:[
                    {
                      path:'sem1',
                      element:<AdminResultsSemester Department='ME' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<AdminResultsSemester Department='ME' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<AdminResultsSemester Department='ME' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<AdminResultsSemester Department='ME' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<AdminResultsSemester Department='ME' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<AdminResultsSemester Department='ME' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<AdminResultsSemester Department='ME' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<AdminResultsSemester Department='ME' Semester='8' />
                    }
                  ]
                },
              
          ]
            },
            {
              path:'collegemessage',
              element:<AdminMessageCollege AdminID={Admin}/>,
            },
            {
              path:'sendcollegemessage',
              element:<AdminMessageCollege AdminID={Admin} m='send'/>
            },
            {
              path:'departmentmessage',
              // element:<AdminMessageDepartmentDisplay AdminID={Admin}/>,
              children:[
                {
                  path:'IT',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='IT'/>,
                },
                {
                  path:'AE',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='AE'/>,
                },
                {
                  path:'CE',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='CE'/>,
                },
                {
                  path:'CSBS',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='CSBS'/>,
                },
                {
                  path:'CS-AIML',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='CS-AIML'/>,
                },
                {
                  path:'CS-CYS',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='CS-CYS' />,
                },
                {
                  path:'CS-DS',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='CS-DS' />,
                },
                {
                  path:'CS-IoT',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='CS-IoT' />,
                },
                {
                  path:'CSE',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='CSE'/>,
                },
                {
                  path:'ECE',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='ECE'/>,
                },
                {
                  path:'EEE',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='EEE'/>,
                },
                {
                  path:'EIE',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='EIE'/>,
                },
                {
                  path:'ME',
                  element:<AdminMessageDepartmentDisplay AdminID={Admin} Department='ME'/>,
                },
          ]
            },
            {
              path:'senddepartmentmessage',
              element:<AdminMessageDepartment AdminID={Admin} />,
            },
            {
              path:'studentmessage',
              element:<AdminMessageStudentDisplay AdminID={Admin} />
            },
            {
              path:'sendstudentmessage',
              element:<AdminMessageStudent AdminID={Admin} m='send' />,
              children:[
                {
                  path:'IT',
                  element:<AdminMessageStudent AdminID={Admin} Department='IT'/>,
                },
                {
                  path:'AE',
                  element:<AdminMessageStudent AdminID={Admin} Department='AE'/>,
                },
                {
                  path:'CE',
                  element:<AdminMessageStudent AdminID={Admin} Department='CE'/>,
                },
                {
                  path:'CSBS',
                  element:<AdminMessageStudent AdminID={Admin} Department='CSBS'/>,
                },
                {
                  path:'CS-AIML',
                  element:<AdminMessageStudent AdminID={Admin} Department='CS-AIML'/>,
                },
                {
                  path:'CS-CYS',
                  element:<AdminMessageStudent AdminID={Admin} Department='CS-CYS' />,
                },
                {
                  path:'CS-DS',
                  element:<AdminMessageStudent AdminID={Admin} Department='CS-DS' />,
                },
                {
                  path:'CS-IoT',
                  element:<AdminMessageStudent AdminID={Admin} Department='CS-IoT' />,
                },
                {
                  path:'CSE',
                  element:<AdminMessageStudent AdminID={Admin} Department='CSE'/>,
                },
                {
                  path:'ECE',
                  element:<AdminMessageStudent AdminID={Admin} Department='ECE'/>,
                },
                {
                  path:'EEE',
                  element:<AdminMessageStudent AdminID={Admin} Department='EEE'/>,
                },
                {
                  path:'EIE',
                  element:<AdminMessageStudent AdminID={Admin} Department='EIE'/>,
                },
                {
                  path:'ME',
                  element:<AdminMessageStudent AdminID={Admin} Department='ME'/>,
                },
          ]
            },
            {
              path:'myprofile',
              element:<AdminProfile AdminID={Admin}/>
            }
        ]
        },
        {
          path:'/student',
          element:<StudentSignin/>,          
          children:[
            {
              path:'',
              element:<AlumniEventsStudent Rollno={Login}/>
            },
            {
              path:'alumnievents',
              element:<AlumniEventsStudent Rollno={Login}/>
            },
            {
              path:'attendance',
              element:<Attendance Rollno={Login}/>
            },
              {
                path:'mycomplaints',
                element:<Mycomplaints Rollno={Login}/>
              },
              {
                path:'postcomplaints',
                element:<StudentComplaints Rollno={Login}/>
              },
              {
                path:'midmarks',
                // element:<StudentMidmarks Rollno={Login}/>,
                children:[
                  {
                    path:'sem1',
                    element:<StudentMidmarksComponent Rollno={Login} Department={`${Dept}`} Semester='1' />
                  },
                  {
                    path:'sem2',
                    element:<StudentMidmarksComponent Rollno={Login} Department={`${Dept}`} Semester='2' />
                  },
                  {
                    path:'sem3',
                    element:<StudentMidmarksComponent Rollno={Login} Department={`${Dept}`} Semester='3' />
                  },
                  {
                    path:'sem4',
                    element:<StudentMidmarksComponent Rollno={Login} Department={`${Dept}`} Semester='4' />
                  },
                  {
                    path:'sem5',
                    element:<StudentMidmarksComponent Rollno={Login} Department={`${Dept}`} Semester='5' />
                  },
                  {
                    path:'sem6',
                    element:<StudentMidmarksComponent Rollno={Login} Department={`${Dept}`} Semester='6' />
                  },
                  {
                    path:'sem7',
                    element:<StudentMidmarksComponent Rollno={Login} Department={`${Dept}`} Semester='7' />
                  },
                  {
                    path:'sem8',
                    element:<StudentMidmarksComponent Rollno={Login} Department={`${Dept}`} Semester='8' />
                  }
                ]
              },
              {
                path:'results',
                // element:<StudentSemresults Rollno={Login}/>,
                children:[
                  {
                    path:'sem1',
                    element:<StudentResultsComponent Rollno={Login} Department={`${Dept}`} Semester='1' />
                  },
                  {
                    path:'sem2',
                    element:<StudentResultsComponent Rollno={Login} Department={`${Dept}`} Semester='2' />
                  },
                  {
                    path:'sem3',
                    element:<StudentResultsComponent Rollno={Login} Department={`${Dept}`} Semester='3' />
                  },
                  {
                    path:'sem4',
                    element:<StudentResultsComponent Rollno={Login} Department={`${Dept}`} Semester='4' />
                  },
                  {
                    path:'sem5',
                    element:<StudentResultsComponent Rollno={Login} Department={`${Dept}`} Semester='5' />
                  },
                  {
                    path:'sem6',
                    element:<StudentResultsComponent Rollno={Login} Department={`${Dept}`} Semester='6' />
                  },
                  {
                    path:'sem7',
                    element:<StudentResultsComponent Rollno={Login} Department={`${Dept}`} Semester='7' />
                  },
                  {
                    path:'sem8',
                    element:<StudentResultsComponent Rollno={Login} Department={`${Dept}`} Semester='8' />
                  }
                ]
              },
              {
                path:'collegemessage',
                element:<CollegeMessage Rollno={Login}/>
              },
              {
                path:'departmentmessage',
                element:<DepartmentMessage Rollno={Login}/>
              },
              {
                path:'mymessage',
                element:<MyMessage Rollno={Login}/>
              },
              {
                path:'myprofile',
                element:<MyProfile Rollno={Login}/>
              }
          ]
        },
        {
          path:'/admissions',
          element:<Admissions/>
        },
        {
          path:'/departments',
          element:<DepartmentsRootlayout/>,
          children:[
                {
                  path:'IT',
                  element:<DepartmentComponent Department='IT'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='IT' Department='IT'/>
                    },
                    {
                      path:'about',
                      element:<IT/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='IT' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='IT' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='IT' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='IT' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='IT' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='IT' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='IT' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='IT' Semester='8' />
                    }
                  ]
                },
                {
                  path:'AE',
                  element:<DepartmentComponent Department='AE'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='AE' Department='AE'/>
                    },
                    {
                      path:'about',
                      element:<AE/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='AE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='AE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='AE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='AE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='AE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='AE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='AE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='AE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CE',
                  element:<DepartmentComponent Department='CE'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='CE' Department='CE'/>
                    },
                    {
                      path:'about',
                      element:<CE/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='CE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='CE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='CE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='CE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='CE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='CE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='CE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='CE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CSBS',
                  element:<DepartmentComponent Department='CSBS'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='CSBS' Department='CSE'/>
                    },
                    {
                      path:'about',
                      element:<CSBS/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='CSBS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='CSBS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='CSBS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='CSBS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='CSBS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='CSBS' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='CSBS' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='CSBS' Semester='8' />
                    }
                  ]
                },
                {
                  path:'CS-AIML',
                  element:<DepartmentComponent Department='CS-AIML' no='yes'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='CS-AIML' Department='CS-AIML'/>
                    },
                    {
                      path:'about',
                      element:<CS_AIML/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='CS-AIML' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='CS-AIML' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='CS-AIML' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='CS-AIML' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='CS-AIML' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='CS-AIML' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-CYS',
                  element:<DepartmentComponent Department='CS-CYS' no='yes'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='CS-CYS' Department='CS-DS'/>
                    },
                    {
                      path:'about',
                      element:<CS_CYS/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='CS-CYS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='CS-CYS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='CS-CYS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='CS-CYS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='CS-CYS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='CS-CYS' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-DS',
                  element:<DepartmentComponent Department='CS-DS' no='yes'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='CS-DS' Department='CS-DS'/>
                    },
                    {
                      path:'about',
                      element:<CS_DS/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='CS-DS' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='CS-DS' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='CS-DS' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='CS-DS' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='CS-DS' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='CS-DS' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CS-IoT',
                  element:<DepartmentComponent Department='CS-IoT' no='yes'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='CS-IoT' Department='CS-AIML'/>
                    },
                    {
                      path:'about',
                      element:<CS_IoT/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='CS-IoT' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='CS-IoT' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='CS-IoT' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='CS-IoT' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='CS-IoT' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='CS-IoT' Semester='6' />
                    },
                  ]
                },
                {
                  path:'CSE',
                  element:<DepartmentComponent Department='CSE'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='CSE' Department='CSE'/>
                    },
                    {
                      path:'about',
                      element:<CSE/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='CSE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='CSE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='CSE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='CSE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='CSE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='CSE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='CSE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='CSE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'ECE',
                  element:<DepartmentComponent Department='ECE'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='ECE' Department='ECE'/>
                    },
                    {
                      path:'about',
                      element:<ECE/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='ECE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='ECE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='ECE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='ECE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='ECE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='ECE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='ECE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='ECE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'EEE',
                  element:<DepartmentComponent Department='EEE'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='EEE' Department='EEE'/>
                    },
                    {
                      path:'about',
                      element:<EEE/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='EEE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='EEE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='EEE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='EEE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='EEE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='EEE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='EEE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='EEE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'EIE',
                  element:<DepartmentComponent Department='EIE'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='EIE' Department='EIE'/>
                    },
                    {
                      path:'about',
                      element:<EIE/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='EIE' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='EIE' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='EIE' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='EIE' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='EIE' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='EIE' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='EIE' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='EIE' Semester='8' />
                    }
                  ]
                },
                {
                  path:'ME',
                  element:<DepartmentComponent Department='ME'/>,
                  children:[
                    {
                      path:'faculty',
                      element:<FacultyComponet Dept='ME' Department='ME'/>
                    },
                    {
                      path:'about',
                      element:<ME/>
                    },
                    {
                      path:'sem1',
                      element:<Semester Department='ME' Semester='1' />
                    },
                    {
                      path:'sem2',
                      element:<Semester Department='ME' Semester='2' />
                    },
                    {
                      path:'sem3',
                      element:<Semester Department='ME' Semester='3' />
                    },
                    {
                      path:'sem4',
                      element:<Semester Department='ME' Semester='4' />
                    },
                    {
                      path:'sem5',
                      element:<Semester Department='ME' Semester='5' />
                    },
                    {
                      path:'sem6',
                      element:<Semester Department='ME' Semester='6' />
                    },
                    {
                      path:'sem7',
                      element:<Semester Department='ME' Semester='7' />
                    },
                    {
                      path:'sem8',
                      element:<Semester Department='ME' Semester='8' />
                    }
                  ]
                },
              
          ]
        },
        {
          path:'/loh',
          element:<ListOfHolidays/>
        },
        {
          path:'/alumni',
          element:<AlumniRootlayout/>,
          children:[
            {
              path:'/alumni',
              element:<AlumniHome/>
            },
            {
              path:'/alumni/ouralumni',
              element:<AlumniData/>
            },
            {
              path:'/alumni/events',
              element:<AlumniEvents/>
            },
            {
              path:'login',
              element:<AlumniSignin AlumniID={Alumni}/>,
              children:[
                {
                  path:'',
                  element:<AlumniSignedInHome AlumniID={Alumni}/>,
                },
                {
                  path:'profile',
                  element:<AlumniProfile AlumniID={Alumni}/>,
                },
              ]
            },
              {
                path:'register',
                element:<AlumniRegister/>
              },
          ]
        }        
      ]
    }
  ])


  return (
    <div className="App ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
