import React from 'react';
import './page-header.css';
import { Link } from "react-router-dom";

export function PageHeader(props) {
    return <div className="pageHeader">
        <h1><Link to="/">Blog Editor</Link></h1>
    </div>
}