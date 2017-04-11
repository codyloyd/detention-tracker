import React from 'react'
import {confirmable} from 'react-confirm'

const ConfirmationDialog = confirmable(props => {
  console.log(props)
  return props.show
    ? <div className={`modal is-active`}>
        <div
          className="modal-background"
          onClick={() => props.cancel('cancelled')}
        />
        <div className="modal-content">
          <div className="box">
            <div className="p">Are you sure you want to delete that?</div>
            <div className="control is-grouped">
              <p className="control">
                <a
                  className="button is-primary"
                  onClick={() => props.cancel('cancelled')}
                >
                  NO!
                </a>
              </p>
              <p className="control">
                <a className="button is-danger" onClick={() => props.proceed()}>
                  DELETE IT!
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="modal-close"
          onClick={() => props.cancel('cancelled')}
        />
      </div>
    : null
})

export default ConfirmationDialog
