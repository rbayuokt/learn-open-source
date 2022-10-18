import React from 'react';
import { Col } from 'react-bootstrap';

function KartuNama(props) {
    return (
        <>
            <Col xs={12} md={4} lg={4} className="my-3">
                <div className="border-custom">
                    <h3 className="mb-4">{props.name}</h3>
                    <p>" {props.quotes} "</p>
                    <a href={props.link} target="_nblank" className="mt-4">{props.linkText}</a>
                </div>
            </Col>
        </>
    )
}

export default KartuNama;