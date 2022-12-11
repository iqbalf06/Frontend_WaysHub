import React from "react";
import { Container, Stack, Image, Card, Form } from "react-bootstrap"


import VideoDetail from "../../assets/images/bbqDetail.png"
import ViewsIcon from "../../assets/icon/ViewsIcon.svg"
import DateIcon from "../../assets/icon/DateIcon.svg"
import PhotoProfile from "../../assets/images/MyChannel.png"
import Ratio from 'react-bootstrap/Ratio';
function Video({response}) {

console.log(response, "ini resp");

    return (
        <>
            <Container className="ps-5 pe-0 mb-4">
                <Stack direction="vertical">
                <div style={{ width: 660, height: 'auto' }}>
      <Ratio aspectRatio="16x9">
        <embed type="video/mp4" src={response.video}/>
      </Ratio>
    </div>
                    {/* <Image src={VideoDetail} /> */}
                    <Card.Text className="fs-5 fw-bold text-white">{response.title}</Card.Text>
                    <Card.Text className="fw-bold text-secondary mb-3" style={{fontSize:"13px"}}>{response.description}</Card.Text>
                    <Stack direction="horizontal" gap={4}>
                        <Stack direction="horizontal">
                            <div className="d-flex flex-column justify-content-center me-2">
                                <Image src={ViewsIcon} />
                            </div>
                            <Card.Text className="fs-6" style={{ color: '#555555' }}>{response.viewcount}</Card.Text>
                        </Stack>

                        <Stack direction="horizontal">
                            <div className="d-flex flex-column justify-content-center me-2">
                                <Image src={DateIcon} />
                            </div>
                            <Card.Text className="fs-6" style={{ color: '#555555' }}>12 Des 2022</Card.Text>
                        </Stack>
                    </Stack>
                    <hr style={{borderTop:'3px solid #C2C2C2'}} />

                    
                    <Stack direction="horizontal">
                        <div className="d-flex flex-column justify-content-center">
                            <Image src={PhotoProfile} className="w-75" />
                        </div>
                        
                        <Form.Control className="py-1 fs-5" style={{ borderColor: '#BCBCBC', borderWidth: '3px', backgroundColor: '#555555', color: 'rgb(210,210,210,0.25)' }} type="text" placeholder="Comment" />
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default Video