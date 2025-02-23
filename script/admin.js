const votePage = document.querySelector('.admin-vote-page');
const voteOverlay = document.querySelector('.admin-vote-overlay');
const renderElement = document.querySelector('.render');

const nomineePageContent = `
       <div class="nominee-body admin-nominee-page">
                   

                    <div class="mana-nom">
                        <h2>Manage Nominees</h2>
                        <div class="mana-nom-btns">
                          
                                <button class="add-nom">Export</button>
                           
                       
                                <button class="add-nom add-btn">
                                    <i class="fa-solid fa-plus"></i>
                                    <span>Add Nominee</span>
                                </button>
                    
                            <div class="input-event">
                               <label for="select">

                                <select name="event-select" id="event-select">
                                    Filter
                                    <option value="volvo">Filter by Event</option>
                                    <option value="volvo">Filter by Status</option>
                                    <option value="volvo">Filter by Date</option>
                                </select>
                                </label>
                               
                        </div>
                        </div>
                    </div>
                    <div class="info-btn">
                        <button>
                            <span>40 total nominees</span>
                        </button>
                        <button>
                            <span>40 active nominees</span>
                        </button>
                        <button>
                            <span>40 qualified nominees</span>
                        </button>
                     
                    </div>
                    <div class="events-card-div">
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button id="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                     
                        
                        
                     
                    </div>
                </div>
`;


const votePageContent = `

  <div class="nominee-body admin-votes-page" >
                   

                    <div class="mana-nom">
                        <h2>Voting Events</h2>
                        <div class="mana-nom-btns">
                          
                                <button class="add-nom">Export</button>
                           
                       
                              
                    
                            <div class="input-event">
                               <label for="select">

                                <select name="event-select" id="event-select">
                                    Filter
                                    <option value="volvo">Filter by Event</option>
                                    <option value="volvo">Filter by Status</option>
                                    <option value="volvo">Filter by Date</option>
                                </select>
                                </label>
                               
                        </div>
                        </div>
                    </div>
                    <div class="info-btn">
                        <button>
                            <span>40 total nominees</span>
                        </button>
                        <button>
                            <span>40 active nominees</span>
                        </button>
                        <button>
                            <span>40 qualified nominees</span>
                        </button>
                     
                    </div>

                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Event Date</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Total Votes</th>
                                    <th>Status</th>
                                    <th class="">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Music Awards Night 2024</td>
                                    <td>Oct 30, 2024</td>
                                    <td>Oct 1, 2024</td>
                                    <td>Oct 10, 2024</td>
                                    <td>500</td>
                                    <td><span class="status green"></span></td>
                                    <td class="">
                                       <div class="action-btns">
                                        <button class="edit">Edit</button>
                                        <button class="delete">Delete</button>
                                       </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Music Awards Night 2024</td>
                                    <td>Oct 30, 2024</td>
                                    <td>Oct 1, 2024</td>
                                    <td>Oct 10, 2024</td>
                                    <td>500</td>
                                    <td><span class="status green"></span></td>
                                    <td class="">
                                       <div class="action-btns">
                                        <button class="edit">Edit</button>
                                        <button class="delete">Delete</button>
                                       </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Music Awards Night 2024</td>
                                    <td>Oct 30, 2024</td>
                                    <td>Oct 1, 2024</td>
                                    <td>Oct 10, 2024</td>
                                    <td>500</td>
                                    <td><span class="status green"></span></td>
                                    <td class="">
                                       <div class="action-btns">
                                        <button class="edit">Edit</button>
                                        <button class="delete">Delete</button>
                                       </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Music Awards Night 2024</td>
                                    <td>Oct 30, 2024</td>
                                    <td>Oct 1, 2024</td>
                                    <td>Oct 10, 2024</td>
                                    <td>500</td>
                                    <td><span class="status green"></span></td>
                                    <td class="">
                                       <div class="action-btns">
                                        <button class="edit">Edit</button>
                                        <button class="delete">Delete</button>
                                       </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Music Awards Night 2024</td>
                                    <td>Oct 30, 2024</td>
                                    <td>Oct 1, 2024</td>
                                    <td>Oct 10, 2024</td>
                                    <td>500</td>
                                    <td><span class="status green"></span></td>
                                    <td class="">
                                       <div class="action-btns">
                                        <button class="edit">Edit</button>
                                        <button class="delete">Delete</button>
                                       </div>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                   
                  
                </div>


`;
const eventPageContent = `

  <div class="admin-event-page " >
                    <div class="create-event">
                        <h3>
                            Create New Event
                        </h3>
                        <button class="create-event-btn">
                            Create Event
                        </button>
                    </div>
                    <div class="events-card-div">
    
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                        <div class="events-card">
                            <div class="event-img-div">
                            <img class="event-img" src="https://votepaddy.pythonanywhere.com/media/GPP_oxGfaBG.jpeg" alt="">
        
                            </div>
                            <div class="card-details">
                                <h3>Ghana Party In The Park</h3>
                                <div class="">
                                    <p>*234*879#</p>
                                    <p>1st January 1970</p>
                                </div>
                               <div id="two-btn">
                                <a href="#">
                                    <button class="edit">Edit</button>
                                   </a>
                                <a href="#">
                                    <button id="delect-btn">Delete</button>
                                   </a>
                               </div>
                            </div>
                        </div>
                     
                        
                        
                     
                    </div>
                </div>



`;

document.querySelectorAll('.overlay-item').forEach(item => {
    item.addEventListener('click', function () {
        const id = this.dataset.id; // Getting the data-id
        const renderElement = document.querySelector('.render'); // Ensure this exists

        if (!renderElement) {
            console.error('Error: .render element not found!');
            return;
        }

        // Remove 'selected' class from all items first
        document.querySelectorAll('.overlay-item').forEach(el => el.classList.remove('selected'));

        // Update content based on ID
        if (id === 'votes') {
            renderElement.innerHTML = votePageContent;
            console.log(votePageContent);
        } else if (id === 'nominee') {
            renderElement.innerHTML = nomineePageContent;
            console.log(nomineePageContent);
        } else if (id === 'events') {
            renderElement.innerHTML = eventPageContent;
            console.log(eventPageContent);
        } else {
            console.warn(`No content found for ID: ${id}`);
        }

        // Add 'selected' class to the clicked item
        this.classList.add('selected');
    });
});
