import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const CcaForm = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();

    const handleChange = (event) => {
      setNewItem({...newItem, [event.target.name]: event.target.value });
    };



    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <p>//This component is just to test how the data will be displayed</p>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                name="item"
                type='text'
                placeholder='Add CCA'
                required
                onChange={handleChange}
            />
            <input
                id='addItem'
                name="points"
                type='text'
                placeholder='Add Points'
                required
                onChange={handleChange}
            />
            <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default CcaForm
