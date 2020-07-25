import React from 'react';
import './page-header.css';
import '../common-styles.css';
import { Link } from "react-router-dom";

export function PageHeader(props) {
    return <div className="pageHeader">
        <h1><Link to="/" className="textLink">Blog Editor</Link></h1>
    </div>
}