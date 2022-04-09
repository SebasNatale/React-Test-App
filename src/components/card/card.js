import './card.scss';
import Modal from '../modal/modal';
import useModal from '../modal/useModal';

const Card = (props) => {
    
    // SETUP FOR DEMO
    // eslint-disable-next-line
    const data = props.test.testData ? props.test.testData : null

    // Comment this block to test the add/edit/delete functionality
/*     localStorage.setItem("doing", JSON.stringify(data.doing))
    localStorage.setItem("done", JSON.stringify(data.done))
    localStorage.setItem("inMind", JSON.stringify(data.toKeepInMind))
    localStorage.setItem("todo", JSON.stringify(data.todo)) */

    const fetchedData = {
        doing: JSON.parse(localStorage.getItem('doing')),
        done: JSON.parse(localStorage.getItem('done')),
        toKeepInMind: JSON.parse(localStorage.getItem('inMind')),
        todo: JSON.parse(localStorage.getItem('todo'))
    }
    // SETUP FOR DEMO

    const {isVisible, toggleModal, eventIndex, eventValue, eventWrapper} = useModal();

    const renderEvents = () => {
        if(fetchedData !== null) {
            switch(props.wrapper) {
                case 'Doing':
                    let doing = fetchedData.doing.map((item, index) => {
                        return <li key={index} className="list-group-item">
                            {item.content}
                            <button className='btn btn-primary' onClick={() => toggleModal(item.content, item.id, index, "doing")}>Edit</button>
                        </li>
                    })
                    return doing[0] ? doing : <li className="list-group-item">No data</li>
                case 'To keep in mind':
                    let inMind = fetchedData.toKeepInMind.map((item, index) => {
                        return <li key={index} className="list-group-item">
                            {item.content}
                            <button className='btn btn-primary' onClick={() => toggleModal(item.content, item.id, index, "inMind")}>Edit</button>
                        </li>
                    })
                    return inMind[0] ? inMind : <li className="list-group-item">No data</li>
                case 'To do':
                    let todo = fetchedData.todo.map((item, index) => {
                        return <li key={index} className="list-group-item">
                            {item.content}
                            <button className='btn btn-primary' onClick={() => toggleModal(item.content, item.id, index, "todo")}>Edit</button>
                        </li>
                    })
                    return todo[0] ? todo : <li className="list-group-item">No data</li>
                case 'Done':
                    let done = fetchedData.done.map((item, index) => {
                        return <li key={index} className="list-group-item">
                            {item.content}
                            <button className='btn btn-primary' onClick={() => toggleModal(item.content, item.id, index, "done")}>Edit</button>
                        </li>
                    })
                    return done[0] ? done : <li className="list-group-item">No data</li>
                default:
                    break
            }
        } else {
            return <li className="list-group-item">No data</li>
        }
    }
  
    // Right now, because the data is being artificially loaded from the Card component,
    // every time this is used, the app just re-loads the default data, so it looks like nothing happened.
    //
    // Comment the item setters to test this functionality.
    const handleAdd = (wrapper) => {
        const newEvent = prompt("Please enter your new event")
        if(newEvent === "" || newEvent === null) {
            alert("You must write something!")
            handleAdd(wrapper)
        } else {
            switch(wrapper) {
                case 'Doing':
                    let doingData = fetchedData.doing
                    doingData.push({
                        // Number(data[data.length - 1].id + 1) but conditional in case of no data
                        "id": "FIX THIS",
                        "content": newEvent
                    })
                    localStorage.setItem("doing", JSON.stringify(doingData))
                    break
                case 'To keep in mind':
                    let inMindData = fetchedData.toKeepInMind
                    inMindData.push({
                        // Number(data[data.length - 1].id + 1) but conditional in case of no data
                        "id": "FIX THIS",
                        "content": newEvent
                    })
                    localStorage.setItem("inMind", JSON.stringify(inMindData))
                    break
                case 'To do':
                    let todoData = fetchedData.todo
                    todoData.push({
                        // Number(data[data.length - 1].id + 1) but conditional in case of no data
                        "id": "FIX THIS",
                        "content": newEvent
                    })
                    localStorage.setItem("todo", JSON.stringify(todoData))
                    break
                case 'Done':
                    let doneData = fetchedData.done
                    doneData.push({
                        // Number(data[data.length - 1].id + 1) but conditional in case of no data
                        "id": "FIX THIS",
                        "content": newEvent
                    })
                    localStorage.setItem("done", JSON.stringify(doneData))
                    break
                default:
                    break
            }
        }
        window.location.reload();
    }

    return (
        <div id="card-wrapper" className="container">
            <div className="row justify-content-between">
                <h1 className='col-7'>{props.wrapper}</h1>
                <button className='col btn btn-primary' onClick={() => handleAdd(props.wrapper)}>Add</button>
            </div>
            <div className="row">
                <div className='card'>
                    <ul className="events-wrapper list-group list-group-flush">
                        {renderEvents()}
                    </ul>
                </div>
            </div>
            <Modal isVisible={isVisible} hideModal={toggleModal} eventIndex={eventIndex} eventValue={eventValue} eventWrapper={eventWrapper}/>
        </div>
    )
};

export default Card;