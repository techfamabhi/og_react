import React, { useEffect, useState } from 'react'
import Index from '../Index'
import Header from '../Header'
import axios from 'axios'

const   Categorytable = () => {

    const [Showdata, setShowdata] = useState([""])

    function fetchData()
    {
        axios.get('http://127.0.0.1:8000/api/Category')
         .then((res)=>{
        const data=res.data;
        console.log(data);

        setShowdata(data)
                    })
    }

    useEffect(()=>{
        fetchData()
    },[])


    function deletedata(id){

        axios.delete('http://127.0.0.1:8000/api/Category/'+id)
         .then((res)=>{
        const data=res.data;
        console.log(data);
        if(data)
        {
            console.log("Data Deleted")
            alert('Data Deleted!!!');
            window.location.href='/Categorytable';
        }
        else
        {
            console.log("Sorry")
        }

         })
    }

  return (
    <React.Fragment>
    <Index/>
    <Header/>

    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">

        <div class="page-wrapper">
            <div class="container-fluid">
            <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div className='col-md-12 d-flex'>
                                    <div className='col-md-10'>
                                         <h4 class="card-title">Category Table</h4>
                                    </div>
                                    <div className='col-md-2 mb-2'>
                                        <a href={'/Category/'} className='btn btn-success'>Add Category</a>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table id="zero_config" class="table table-striped table-bordered no-wrap">
                                        <thead>
                                            <tr>
                                                <th>Category Name</th>


                                                <th>Status</th>
                                                <th>Margin</th>
                                                <th>Description</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { Showdata.map((row)=>{
                                            return(
                                            <tr>
                                                <td>{row.cname}</td>
                                              

                                                <td>{row.status}</td>
                                                <td>{row.margin}</td>
                                                <td>{row.description}</td>
                                                <td>
                                                    <a  className='btn btn-primary' href={'/EditCategory/'+row.id}>Edit</a>
                                                    <button className='btn btn-danger ml-2' onClick={()=>deletedata(row.id)}>Delete</button>
                                                </td>
                                            </tr>
                                            )
                                         })
                                        }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default  Categorytable
