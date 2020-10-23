import React, { Component } from "react";
import "./../../../App.css";
import {Button, Col, Container, Form, Image, Jumbotron, ProgressBar, Row} from "react-bootstrap";
import auth from "./../../../auth";
import axios from "axios";
import { storageRef2 } from "../../../firebase";


class AskQuestion extends Component{
    constructor(props) {
        super(props);
        this.state = { isLoading: true, userData: [], title: "", category: "", description : "", image: ""}
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({ currentScreenHeight: window.screen.height });
        try {
            auth.checkAuthentication();
            const userId = auth.getCheckAuthentication()._id;

            axios
                .get(`http://localhost:5000/users/spefic/${userId}`)
                .then((res) => {
                    this.setState({
                        userData: res.data,
                        isLoading: false
                    });
                    console.log(this.state.userData)
                })
                .catch((err) => console.log(err));
        } catch (err) {
            this.props.history.push("/login");
        }
    }


    setImageQuestion = (e) => {
        if (e.target.files[0]) {
            this.setState({ image: e.target.files[0] });
        }
    };

    sumbitQuestion = (e) => {
        e.preventDefault();

        const loadingTag = document.querySelectorAll('.loadingQuestionPost');
        const success = document.getElementById('successQuestionPost');

        loadingTag.forEach( node => {
            node.classList.remove('hide')
        });

        if(!this.validate()){
            loadingTag.forEach( node => {
                node.classList.add('hide')
            });
            return;
        }

        if(this.state.image.name === undefined){
            axios
                .post("http://localhost:5000/questions/new", {
                    "auther": `${this.state.userData.fname} ${this.state.userData.lname}`,
                    "autherUniqueId": this.state.userData._id,
                    "title": this.state.title,
                    "views": 0,
                    "description": this.state.description,
                    "category": this.state.category,
                })
                .then(res => {
                    loadingTag.forEach( node => {
                        node.classList.add('hide')
                    });
                    success.classList.remove("hide");
                    setTimeout(() => {
                        this.props.history.push("/feed");
                    },2000);
                })
                .catch(err => console.log(err));
            return;
        }

        const upload = storageRef2
            .ref(`images/${this.state.image.name}`)
            .put(this.state.image);
        upload.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
                console.log(error);
            },
            () => {
                storageRef2
                    .ref("images")
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then((url) => {
                        console.log(url);
                        axios
                            .post("http://localhost:5000/questions/new", {
                                "auther": `${this.state.userData.fname} ${this.state.userData.lname}`,
                                "autherUniqueId": this.state.userData._id,
                                "title": this.state.title,
                                "views": 0,
                                "description": this.state.description,
                                "image": url,
                                "category": this.state.category,
                            })
                            .then(res => {
                                loadingTag.forEach( node => {
                                    node.classList.add('hide')
                                });
                                success.classList.remove("hide");
                                setTimeout(() => {
                                    this.props.history.push("/feed");
                                },2000);
                            })
                            .catch(err => console.log(err));
                    });
            }
        );

    }

    validate = () => {
        let isValid = true;
        const title = document.getElementById('titleMissing');
        const category = document.getElementById('titleMissing');
        const desc = document.getElementById('titleMissing');
        if(this.state.title.length === 0 || this.state.title === ""){
            isValid = false;
            document.getElementById('titleMissing').classList.remove('hide');
        }

        if(this.state.category.length === 0 || this.state.category === "default"){
            isValid = false;
            document.getElementById('categoryMissingQs').classList.remove('hide');
        }

        if(this.state.description === 0 || this.state.description === ""){
            isValid = false;
            document.getElementById('descMissing').classList.remove('hide');
        }

        setTimeout(() => {
            title.classList.add('hide');
            category.classList.add('hide');
            desc.classList.add('hide');
        },4000)

        return isValid;
    }





    render() {
        return(
            <Jumbotron className="test">

                    <Row>
                        <Col className="d-none d-sm-block">
                            <Image
                                className="d-block w-100"
                                thumbnail
                                src="https://image.freepik.com/free-vector/flat-people-holding-question-marks_52683-8638.jpg"
                                alt="First slide"
                            />
                        </Col>
                        <Col>
                            <Form>
                                <h3 style={{ marginTop: "30px" }}>Ask a public question </h3>
                                <Form.Group controlId="exampleForm.questionTitle">
                                    <Form.Label style={{marginBottom: "0px"}}>Title </Form.Label><br />
                                    <Form.Label style={{fontSize:"0.75em", marginTop: "0px"}}>Be specific and imagine you’re asking a question to another person
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="e.g Is there an R function for the index of an element in vector?" value={this.state.title} onChange={ (e) => {this.setState({title: e.target.value})}} />
                                </Form.Group>
                                <div
                                    className="alert alert-danger hide test"
                                    role="alert"
                                    id="titleMissing"
                                >
                                    Fill out this field
                                </div>
                                <Form.Group controlId="exampleForm.questionDesc">
                                    <Form.Label style={{marginBottom: "0px"}}>Select a topic</Form.Label><br />
                                    <Form.Label style={{fontSize:"0.75em", marginTop: "0px"}}>Select a specific language or framework e.g: java, python , etc...
                                    </Form.Label>
                                    <Form.Control as="select" onChange={ (e) => {this.setState({category: e.target.value})}}>
                                        <option selected={true} disabled={true} value="default">Select a topic</option>
                                        <option value="JavaScript">JavaScript</option>
                                        <option value="HTML/CSS">HTML/CSS</option>
                                        <option value="Java">Java</option>
                                        <option value="Python">Python</option>
                                        <option value="Android">Android</option>
                                        <option value="SQL">SQL</option>
                                        <option value="Other">Other</option>
                                    </Form.Control>
                                </Form.Group>
                                <div
                                    className="alert alert-danger hide test"
                                    role="alert"
                                    id="categoryMissingQs"
                                >
                                    Choose a spefic topic
                                </div>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{marginBottom: "0px"}}>Body </Form.Label><br />
                                    <Form.Label style={{fontSize:"0.75em", marginTop: "0px"}}>Include all the information someone would need to answer your question </Form.Label>
                                    <Form.Control as="textarea" value={this.state.description} rows={6} onChange={(e) => {this.setState({description: e.target.value})}}/>
                                </Form.Group>
                                <div
                                    className="alert alert-danger hide test"
                                    role="alert"
                                    id="descMissing"
                                >
                                    Fill out this field
                                </div>
                                <Form.Group controlId="exampleForm.Controlimage">
                                <Form.File
                                    id="sumbitiamge"
                                    label="Upload an image (optional)"
                                    onChange={this.setImageQuestion}
                                />
                                </Form.Group>
                                <ProgressBar striped variant="dark" className="hide test loadingQuestionPost" animated now={100} />
                                <div
                                    className="alert alert-success test hide"
                                    role="alert"
                                    id="successQuestionPost"
                                >
                                    Successfully Posted
                                </div>
                                <br className="hide test loadingQuestionPost"/>
                                <div className="text-center">
                                <Button variant="secondary" type="submit" onClick={this.sumbitQuestion}>
                                    Post your Question
                                </Button>
                                </div>

                            </Form>
                        </Col>
                    </Row>

            </Jumbotron>
        );
    }
}

export default AskQuestion;