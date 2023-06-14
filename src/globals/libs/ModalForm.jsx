import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { HashLoader } from 'react-spinners';
import styles from './ModalForm.module.scss'

export default function ModalForm({ inputs, onSubmit, title, submitText = 'submitText prop', form, setForm, editing, setter, setSetter, defaultValues, status }) {
    const [filesSelected, setFilesSelected] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleFileChange = (e) => {
        if(e.target.multiple) {
            setFilesSelected({ ...filesSelected, [e.target.name]: `${e.target.files.length} files selected` })
            return setForm({ ...form, [e.target.name]: e.target.files })
        } 

        setFilesSelected({
            ...filesSelected,
            [e.target.name]: `${e.target.files[0].name} selected!`
        })
        return setForm({ ...form, [e.target.name]: e.target.files[0] })
    }

    if(status && status.status === 'loading') return (
        <div className={styles.modal_form} animation='appear'>
            <FontAwesomeIcon icon={faXmark} className={styles.close} onClick={() => setSetter(!setter)} />

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <HashLoader color='white' size={50} />
            </form>
        </div>
    )

    return (
        <div className={styles.modal_form} animation='appear'>
            <FontAwesomeIcon icon={faXmark} className={styles.close} onClick={() => setSetter(!setter)} />

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <h2>{title}</h2>

                {inputs.map((input, index) => {
                    if(input.type === 'select') return (
                        <div key={index} className={styles.form_group}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <select name={input.name} id={input.name} value={form[input.name]} onChange={handleChange}>
                                {input.options.map((option, index) => {
                                    return (
                                        <option value={option.value} key={index}>{option.label}</option>
                                    )
                                })}
                            </select>
                        </div>
                    )

                    if(input.type === 'color') return (
                        <div key={index} className={styles.form_group}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input type={input.type} name={input.name} id={input.name} defaultValue={editing ? form[input.name] : defaultValues[input.name]} onChange={(e) => handleChange(e)} />
                        </div>
                    )

                    if(input.type === 'textarea') return (
                        <div key={index} className={styles.form_group}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <textarea name={input.name} id={input.name} value={editing ? form[input.name] : defaultValues[input.name]} onChange={(e) => handleChange(e)} />
                        </div>
                    )

                    if(input.type === 'file') return (
                        <div key={index} className={styles.form_group}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <label htmlFor={input.name} className={styles.file_picker}>
                                <span>Choose a file</span>
                                {input.multiple && filesSelected[input.name] && <span style={{fontSize: 12,color: 'var(--color-success)'}}>{filesSelected[input.name]}</span>}
                                {!input.multiple && filesSelected[input.name] && <span style={{fontSize: 12,color: 'var(--color-success)'}}>{filesSelected[input.name]}</span>}
                            </label>
                            <input type={input.type} name={input.name} id={input.name} onChange={(e) => handleFileChange(e)} multiple={input.multiple ? true : false} />
                        </div>
                    )

                    return (
                        <div key={index} className={styles.form_group}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <input type={input.type} name={input.name} id={input.name} value={editing ? form[input.name] : defaultValues[input.name]} onChange={(e) => handleChange(e)} />
                        </div>
                    )
                })}

                {status && status.status === 'error' && <p animation="appear" className='error'>{status.message}</p>}
                {status && status.status === 'success' && <p animation="appear" className='success'>{status.message}</p>}

                <button type="submit" onClick={onSubmit}>{submitText}</button>
            </form>
        </div>
    )
}
