import React, { useState } from 'react';

export const ModalAdmin = () => {
    const [user, setUser] = useState('');

    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userRegister">
                Registrar usuario
            </button>
            <div class="modal fade" id="userRegister" tabindex="-1" aria-labelledby="userRegister" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="userRegister">Regitro de Usuario</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form 
                                onSubmit={ev =>{
                                    ev.preventDefault();
                                    const user = {
                                        firstName: ev.target.elements.firstName.value,
                                        lastName: ev.target.elements.lastName.value,
                                        mail: ev.target.elements.mail.value,
                                        nameUser:ev.target.elements.nameUser.value,
                                        password: ev.target.elements.password.value,
                                        password2: ev.target.elements.password2.value,
                                    }
                                    setUser(user);
                                    console.log(user)
                                }}>
                                <div className='row'>
                                    <div className="mb-3 col-6">
                                        <label for="firstName" className="form-label">Nombre</label>
                                        <input type="text"
                                            className="form-control" id="firstName"
                                            maxlength="20"
                                            required />
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label for="lastName" className="form-label">Apellido</label>
                                        <input type="text"
                                            className="form-control" id="lastName" maxlength="20"
                                            required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="mail" className="form-label">Email</label>
                                    <input type="email"
                                        className="form-control" id="mail" placeholder="nombre@ejemplo.com"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label for="nameUser" className="form-label">Usuario</label>
                                    <input type="text"
                                        className="form-control" id="nameUser"
                                        required />
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-6">
                                        <label for="password" className="form-label">Ingresar Contraseña</label>
                                        <input type="text"
                                            className="form-control" id="password"
                                            minlength="4" maxlength="12"
                                            required />
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label for="password2" className="form-label">Confirmar Contraseña</label>
                                        <input type="text"
                                            className="form-control" id="password2"
                                            minlength="4" maxlength="12"
                                            required />
                                    </div>
                                </div>
                                <div class="mb-3 text-danger" id="errorRegistro">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary" >Registrar</button>
                                </div>
                                <p> Usuario 
                                    {user.nameUser} Registrado Exitosamente
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
