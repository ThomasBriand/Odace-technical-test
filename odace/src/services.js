import { Card, Typography } from "@mui/joy";
import Button from '@mui/joy/Button';

function Services() {
    return (
        <>
            <Card sx={{ width: 300, height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#EDEDED' }}>
                <div>
                    <Typography level="title-lg">I want to be Known</Typography>
                    <Typography level="body-m">This includes :</Typography>
                    <Typography level="body-sm">Communication plan</Typography>
                    <Typography level="body-sm">Influence Audit</Typography>
                    <Typography level="body-sm">Follow up</Typography>
                    <Typography level="body-sm"></Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ backgroundColor: '#810DD4', color: '#fff' }}>Lets talk about this</Button>
                </div>
            </Card>
            <Card sx={{ width: 300, height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#EDEDED' }}>
                <div>
                    <Typography level="title-lg">Can i take a picture ?</Typography>
                    <Typography level="body-m">This includes :</Typography>
                    <Typography level="body-sm">Communication plan</Typography>
                    <Typography level="body-sm">Influence Audit</Typography>
                    <Typography level="body-sm">Follow up</Typography>
                    <Typography level="body-sm">Advertisment spots</Typography>
                    <Typography level="body-sm">Filming session</Typography>
                    <Typography level="body-sm">Photo-Shooting</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ backgroundColor: '#810DD4', color: '#fff' }}>Lets talk about this</Button>
                </div>
            </Card>
            <Card sx={{ 
                width: 300, 
                height: 350, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                backgroundColor: '#EDEDED',
                borderTop: '20px solid #6408A5',
                borderBottom: '3px solid #6408A5',
                borderLeft: '3px solid #6408A5',
                borderRight: '3px solid #6408A5',
                position: 'relative'
            }}>
                <Typography 
                    sx={{ 
                        position: 'absolute', 
                        top: '-22px', 
                        left: '50%', 
                        transform: 'translateX(-50%)',
                        color: 'white',
                    }}
                >
                    Most Success
                </Typography>
                <div>
                    <Typography level="title-lg">Mr. world wide</Typography>
                    <Typography level="body-m">This includes :</Typography>
                    <Typography level="body-sm">Communication plan</Typography>
                    <Typography level="body-sm">Influence Audit</Typography>
                    <Typography level="body-sm">Follow up</Typography>
                    <Typography level="body-sm">Advertisment spots</Typography>
                    <Typography level="body-sm">Filming session</Typography>
                    <Typography level="body-sm">Photo-Shooting</Typography>
                    <Typography level="body-sm">AI-Pushed Insight</Typography>
                    <Typography level="body-sm">Access to our exclusive platform</Typography>
                    <Typography level="body-sm">Live analysis of your media</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ backgroundColor: '#810DD4', color: '#fff' }}>Lets talk about this</Button>
                </div>
            </Card>
        </>
    );
}

export default Services;