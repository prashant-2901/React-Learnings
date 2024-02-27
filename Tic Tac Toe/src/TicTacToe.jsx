import React, { useState } from 'react'

function TicTacToe() {

    const [tableData, setTableData] =useState(Array.from({length: 9}, () => ""))
    const [player, setPlayer] =  useState("X")
    const [showButton, setShowButton] = useState([])
    const [dummyData, setDummyData] = useState(Array.from({length: 9}, () => ""))

    const buttonClicked= (index) =>{
        dummyData[index] = [...tableData]
        console.log(showButton,"showbutton");
        setDummyData(dummyData)
        setTableData(dummyData[index])
    }

    const tableDataFn=(index) =>{
        const newData = [...tableData]
        if(newData[index] === ""){
        newData[index] = player
        setTableData(newData)
        if(player ==="X")
        setPlayer("O")
        else if(player==="O")
        setPlayer("X")
        setShowButton(prevButtons =>[...prevButtons, <button key={prevButtons.length} onClick={()=>buttonClicked(prevButtons.length)}>Move {prevButtons.length}</button>])
        }
        winnerFn(newData)
        drawFn(newData)
    }

    const winnerFn = (data) =>{
        if( (data[0]!=="" && data[1]!=="" && data[2]!=="" && data[0] === data[1] && data[1]===data[2]) || (data[3]!== "" && data[4]!== "" && data[5]!== "" && data[3] === data[4] && data[4] ===data[5]) || (data[6]!=="" && data[7]!="" && data[8]!=="" && data[6] === data[7] && data[7] ===data[8]) || (data[0]!=="" && data[3]!=="" && data[6]!=="" && data[0] === data[3] && data[3] ===data[6]) || (data[1]!=="" && data[4]!=="" && data[7]!=="" && data[1] === data[4] && data[4] ===data[7]) || (data[2]!=="" && data[5]!=="" && data[8]!=="" && data[2] === data[5] && data[5] ===data[8]) || (data[0]!=="" && data[4]!=="" && data[8]!=="" && data[0] === data[4] && data[4] ===data[8]) || (data[2]!=="" && data[4]!=="" && data[6]!=="" && data[2] === data[4] && data[4] ===data[6])){
            setTableData(Array.from({length: 9}, () => ""))
            alert("Winner"+player)
        }
    }

    const drawFn = (datas) => {
        let counter = 0
        datas.forEach(data => {
            if(data !== "" ){
                counter++;
            }
        });
        if(counter == 9){
            setTableData(Array.from({length: 9}, () => ""))
            alert("draw")
        }
    }


  return (
    <div>
        Table compomemt
        <table>
            <tbody>
            <tr>
                <td onClick={()=>tableDataFn(0)}>{tableData[0]}</td>
                <td onClick={()=>tableDataFn(1)}>{tableData[1]}</td>
                <td onClick={()=>tableDataFn(2)}>{tableData[2]}</td>
            </tr>
            <tr>
                <td onClick={()=>tableDataFn(3)}>{tableData[3]}</td>
                <td onClick={()=>tableDataFn(4)}>{tableData[4]}</td>
                <td onClick={()=>tableDataFn(5)}>{tableData[5]}</td>
            </tr>
            <tr>
                <td onClick={()=>tableDataFn(6)}>{tableData[6]}</td>
                <td onClick={()=>tableDataFn(7)}>{tableData[7]}</td>
                <td onClick={()=>tableDataFn(8)}>{tableData[8]}</td>
            </tr>
            </tbody>
        </table>
        {showButton.map((index)=>(
            <div key={index}>{index}</div>
        ))}
    </div>

  )
}

export default TicTacToe