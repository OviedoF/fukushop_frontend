import React from 'react';

const ColorForm = ({status, handleChanges, handleSend, buttonText, data}) => {
    return (
        <form action="POST" className='form_container first_design'>
            <div className="form-group required">
                <input onChange={(e) => handleChanges(e)} type="text" name='name' defaultValue={data && data.name} placeholder='Nombre del color' />
            </div>

            <div className="form-group required">
                <input type='color' onChange={(e) => handleChanges(e)} name='color' placeholder='Color' defaultValue={data && data.description} />
            </div>

            <div className="form-group required">
                <input type='text' onChange={(e) => handleChanges(e)} name='imageKey' placeholder='Image Key' defaultValue={data && data.description} />
            </div>

            {status.status === 'error' && <p className='blocks_design_error'>{status.message}</p>}
            {status.status === 'success' && <p className='blocks_design_success'>{status.message}</p>}

            <button type='submit' onClick={(e) => handleSend(e)}>{buttonText}</button>
        </form>
    );
}

export default ColorForm;
