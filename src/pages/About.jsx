import NavBar from '../components/NavBar';
import '../App.css';

function AboutMe() {
    return (
        <div className="App">
            <NavBar />
            <div className="App-sub">
                <h1>Hello!</h1>
                <h2>Welcome to my about me page</h2>
                <br />
            </div>
            <div class="App-info">
                <h3>My name is Johnny
                    <h4>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                    </h4>
                </h3>
            </div>
        </div>
    )
}
export default AboutMe;