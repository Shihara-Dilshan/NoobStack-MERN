import React , { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Chart from 'chart.js';

import axios from "axios";
import "./../../App.css";


class MainDetails extends Component{
	constructor(){
	    super();
	    this.state = {
	        isLoading : true,
	        countrylist : [],
	        details: [],
	        lastUpdated: "Loading...",
	        CTotalCases: "Loading...",
	        CActiveCases: "Loading...",
	        CTotalRecovered: "Loading...",
	        CTotalDeaths: "Loading...",
	        CTotalCritical: "Loading..."
	        
	    };
	}
	
	componentDidMount(){
	
	  let countries = [];
	  let cases = [];
	   axios
	   	.get('https://covid19datasl.herokuapp.com/countries')
	   	.then(res => {
	   	
	   	axios
	   	.get('https://covid19datasl.herokuapp.com/')
	   	.then(resAll => {
	   	   this.setState({lastUpdated: resAll.data[0].lastUpdated});
	   	   let Total = 0;
	   	   let Active = 0;
	   	   let recovered = 0;
	   	   let deaths = 0;
	   	   let critical = 0;
	   	   resAll.data.forEach( (data) => {
	   	       Total += Number.parseInt(data.totalConfirmed);
	   	       Active += Number.parseInt(data.activeCases);
	   	       recovered += Number.parseInt(data.totalRecovered);
	   	       deaths += Number.parseInt(data.totalDeaths);
	   	       critical += Number.parseInt(data.totalCritical);
	   	       countries.push(data.country);
	   	       cases.push(data.totalConfirmed);
	   	   })
	   	   this.setState({CTotalCases: Total, CActiveCases: Active, CTotalRecovered: recovered, CTotalDeaths: deaths, CTotalCritical: critical});
	   	   var ctx = document.getElementById('myChart');
	   // eslint-disable-next-line
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: countries,
        datasets: [{
            label: 'Total Cases',
            data: cases,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
	   	})
	   	.catch(err => console.log(err));
	   	
	   	this.setState({ isLoading : false, countrylist: res.data.sort( (a,b) => {
	   		if(a.country < b.country){
	   			return -1;
	   		}else{
	   			return 1;
	   		}
	   	
	   	})  });
	   		
	   		
	   	})
	   	.catch(err => console.log(err));
	
		axios
		  .get('https://covid19datasl.herokuapp.com/')
		  .then(res2 => this.setState({ isLoading: false, details: res2.data.splice(0,13)}))
		  .catch(err2 =>  console.log(err2));
	}
	
	getCountryData = (e) => {
	   if(e.target.value === "default") return;
	    const targetCountry = e.target.value;
	    axios
	    .get(`https://covid19datasl.herokuapp.com/specific/${targetCountry}`)
	    .then(res => {
	         this.setState({CTotalCases: res.data[0].totalConfirmed, CActiveCases: res.data[0].activeCases, CTotalRecovered: res.data[0].totalRecovered ,lastUpdated: res.data[0].lastUpdated,CTotalDeaths: res.data[0].totalDeaths, CTotalCritical: res.data[0].totalCritical }); 
	     })
	    .catch(err => console.log(err));
	    
	    
	}
	
	render(){
	   return(
	         <Jumbotron className="test">
        <Container>
          <h3
            className="text-center"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            COVID-19 Coronavirus Pandemic
          </h3>
          <CardDeck>
            {this.state.isLoading ? (
              <Button
                variant="dark"
                disabled
                style={{ width: "100%", height: "700px" }}
              >
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            ) : (
              <Container id="covid19data" style={{maxWidth: "100% !important"}}>
  <Row>
    <Col sm={9}>
    	<Form.Group as={Col} controlId="formGridState">

      <Form.Control as="select" defaultValue="Choose..." onChange={this.getCountryData}>
        <option value="default">Choose Country...</option>
        {this.state.countrylist.map(country => (    <option value={country.countryCode}>{country.country}</option>))}
    
      </Form.Control>
    </Form.Group>
    <Row>
    <Col sm={4}>
    <Card border="primary">
    <Card.Header>Coronavirus Cases</Card.Header>
    <Card.Body>
      <Card.Title>Total : {this.state.CTotalCases}</Card.Title>
      <Card.Text>
        Active : {this.state.CActiveCases}
      </Card.Text>
  
       <h6 style={{fontSize: "10px"}}>
        Last Updated : {this.state.lastUpdated}
       </h6>
 
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
    <Card border="success">
    <Card.Header>Recovered</Card.Header>
    <Card.Body>
      <Card.Title>Total : {this.state.CTotalRecovered}</Card.Title>
      <Card.Text>
        Active : {this.state.CActiveCases}
      </Card.Text>
  
       <h6 style={{fontSize: "10px"}}>
        Last Updated : {this.state.lastUpdated}
       </h6>
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
    <Card border="danger">
    <Card.Header>Deaths</Card.Header>
    <Card.Body>
      <Card.Title>Total : {this.state.CTotalDeaths}</Card.Title>
      <Card.Text>
        Critical : {this.state.CTotalCritical}
      </Card.Text>
  
       <h6 style={{fontSize: "10px"}}>
        Last Updated : {this.state.lastUpdated}
       </h6>
    </Card.Body>
  </Card>
    </Col>
    </Row>
    <canvas id="myChart" width="400" ></canvas>
    </Col>
    
    <Col sm={3}>
    	<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Country</th>
      <th>Cases</th>
      <th>Deaths</th>
    </tr>
  </thead>
  <tbody>
    {this.state.details.map( (data, index) =>  <tr>
      <td>{index}</td>
      <td>{data.country}</td>
      <td>{data.totalConfirmed}</td>
      <td>{data.totalDeaths}</td>
    </tr> )}
    
    
  </tbody>
</Table>
    
    
    </Col>
  </Row>
  
</Container>
            )}
          </CardDeck>
        </Container>
      </Jumbotron>
	   );
	
	}

}

export default MainDetails;
