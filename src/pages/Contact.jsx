import NavBar from '../components/NavBar';
import '../App.css';

function ContactMe() {
    return (
        <div className="App">
            <NavBar />
            <div className="App-sub">
                <h1>Hello!</h1>
                <h2>Welcome to my contact page</h2>
            </div>

            <br />

            <div class="App-info">
                <h3>Here's where you can get in touch with me!</h3>

                <div class="social-container">
                    <div class="social-card">
                        <h4><b>FACEBOOK</b></h4>
                        <div class="dropdown">
                            <span>FACEBOOK Icon with
                                lorem ipsum dolor sit amet, consectetur adip
                            </span>
                            <div class="dropdown-content">
                                <p>BOOM</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-card">
                        <h4><b>GITHUB</b></h4>
                        <div class="dropdown">
                            <span>GITHUB Icon with
                                lorem ipsum dolor sit amet, consectetur adip
                            </span>
                            <div class="dropdown-content">
                                <p>BOOM</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-card">
                        <h4><b>INSTAGRAM</b></h4>
                        <div class="dropdown">
                            <span>INSTAGRAM Icon with
                                lorem ipsum dolor sit amet, consectetur adip
                            </span>
                            <div class="dropdown-content">
                                <p>BOOM</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-card">
                        <h4><b>LINKED IN</b></h4>
                        <div class="dropdown">
                            <span>LINKED IN Icon with
                                lorem ipsum dolor sit amet, consectetur adip
                            </span>
                            <div class="dropdown-content">
                                <p>BOOM</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
export default ContactMe;