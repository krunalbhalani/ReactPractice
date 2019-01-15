
import React, {Component} from 'react';
import ReactJson from 'react-json-view'
import JSONTree from 'react-json-tree'
import utility from './utility'
class JsonformatComponent extends Component
{

    /*
    _omitColumn(myarray,keyname){
        const newArray = [];
        myarray.forEach(function(value) {
            delete value[keyname];
            newArray.push(value);
        });
        return newArray;
    }
    */

     

    render(){
        const jsonObj = [{name:"Wake up", date: "2012-09-28T06:00:00"},
        {name:"Breakfast", 	date:"2012-09-28T06:30:00"},
        {name:"Leave kids at school", 	date:"2012-09-28T07:45:00"},
        {name:"Check email", date:	"2012-09-28T08:00:00"},
        {name:"Lunch", date:	"2012-09-28T11:30:00"},
        {name:"Send report", date:	"2012-09-28T13:15:00"},
        {name:"Pick kids", date:	"2012-09-28T17:16:00"},
        {name:"Dinner", date:	"2012-09-28T18:13:00"},
        {name:"Watch a movie", date:	"2012-09-28T20:16:00"},
        {name:"Go to sleep", date:	"2012-09-28T23:00:00"}
        ];

        return (
                
                <div>
                   
                        
                            
                        

                            <ReactJson  displayDataTypes={false} src={jsonObj} />

                    <hr/>

                    <JSONTree data={[{name:"Wake up", date: "2012-09-28T06:00:00"},
                        {name:"Breakfast", 	date:"2012-09-28T06:30:00"},
                        {name:"Leave kids at school", 	date:"2012-09-28T07:45:00"},
                        {name:"Check email", date:	"2012-09-28T08:00:00"},
                        {name:"Lunch", date:	"2012-09-28T11:30:00"},
                        {name:"Send report", date:	"2012-09-28T13:15:00"},
                        {name:"Pick kids", date:	"2012-09-28T17:16:00"},
                        {name:"Dinner", date:	"2012-09-28T18:13:00"},
                        {name:"Watch a movie", date:	"2012-09-28T20:16:00"},
                        {name:"Go to sleep", date:	"2012-09-28T23:00:00"}
                        ]} />

                      <hr/>

<ReactJson src={{"id": "0001",
                    "batters":
                    {
                        "batter":
                            [
                                {"id": "1001", "type": "Regular" }
                            ]
                    }
                }}/>


                    <ReactJson src={{
                        "id": "0001",
                        "type": "donut",
                        "name": "Cake",
                        "ppu": 0.55,
                        "batters":
                            {
                                "batter":
                                    [
                                        { "id": "1001", "type": "Regular" },
                                        { "id": "1002", "type": "Chocolate" },
                                        { "id": "1003", "type": "Blueberry" },
                                        { "id": "1004", "type": "Devil's Food" }
                                    ]
                            },
                        "topping":
                            [
                                { "id": "5001", "type": "None" },
                                { "id": "5002", "type": "Glazed" },
                                { "id": "5005", "type": "Sugar" },
                                { "id": "5007", "type": "Powdered Sugar" },
                                { "id": "5006", "type": "Chocolate with Sprinkles" },
                                { "id": "5003", "type": "Chocolate" },
                                { "id": "5004", "type": "Maple" }
                            ]
                }} />
                </div>
        );
    }
}

export default JsonformatComponent;