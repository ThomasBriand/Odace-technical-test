import React from 'react';
import { Card } from "@mui/joy";

function FeedBack() {
    return (
        <div style={{padding: '20px' }}>
            <Card variant='soft' style={{ marginLeft: '10%', marginTop: '15px', backgroundColor: '#171a1c' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img  src={process.env.PUBLIC_URL + '/logo-amazon-png.png'} alt="logo-amazon-png.png" style={{marginLeft: '5%', width: '350px', height: '350px'}}/>
                    <p style={{margin: '10%', color: '#ffffff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </Card>
            <Card variant='soft' style={{ marginRight: '10%', marginTop: '15px', backgroundColor: '#171a1c' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{margin: '10%', color: '#ffffff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <img  src={process.env.PUBLIC_URL + '/Logo-Red-Bull.jpg'} alt="Logo-Red-Bull.png" style={{marginRight: '5%', width: '350px', height: '350px'}}/>
                </div>
            </Card>
            <Card variant='soft' style={{ marginLeft: '10%', marginTop: '15px', backgroundColor: '#171a1c' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img  src={process.env.PUBLIC_URL + '/dunkin.png'} alt="logo-amazon-png.png" style={{marginLeft: '5%', width: '350px', height: '350px'}}/>
                    <p style={{margin: '10%', color: '#ffffff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </Card>
            <Card variant='soft' style={{ marginRight: '10%', marginTop: '15px', backgroundColor: '#171a1c' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{margin: '10%', color: '#ffffff'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <img  src={process.env.PUBLIC_URL + '/jo.jpg'} alt="logo-amazon-png.png" style={{marginRight: '5%', width: '350px', height: '350px'}}/>
                </div>
            </Card>
        </div>
    );
}

export default FeedBack;