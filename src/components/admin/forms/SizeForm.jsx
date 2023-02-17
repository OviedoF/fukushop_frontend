import React from 'react';

const SizeForm = ({status, handleChanges, handleSend, buttonText, data}) => {
    return (
        <form action="POST" className='form_container first_design'>
            <div className="form-group required">
                <input onChange={(e) => handleChanges(e)} type="text" name='name' defaultValue={data && data.name} placeholder='Nombre del talle' />
            </div>

            <div className="form-group required">
                <input type='text' onChange={(e) => handleChanges(e)} name='chest' placeholder='Medidas del pecho' defaultValue={data && data.description} />
            </div>

            <div className="form-group required">
                <input type='text' onChange={(e) => handleChanges(e)} name='waist' placeholder='Medidas de la cintura' defaultValue={data && data.description} />
            </div>

            <div className="form-group required">
                <input type='text' onChange={(e) => handleChanges(e)} name='hips' placeholder='Medidas de la cadera' defaultValue={data && data.description} />
            </div>

            <div className="form-group required">
                <input type='text' onChange={(e) => handleChanges(e)} name='height' placeholder='Ancho' defaultValue={data && data.description} />
            </div>

            {status.status === 'error' && <p className='blocks_design_error'>{status.message}</p>}
            {status.status === 'success' && <p className='blocks_design_success'>{status.message}</p>}

            <button type='submit' onClick={(e) => handleSend(e)}>{buttonText}</button>
        </form>
    );
}

export default SizeForm;
