import React from "react";
import { Stack, Image, Col, Row, Card } from "react-bootstrap"

import Thumbnail1 from "../../assets/images/Thumbnail1.png"
import Thumbnail2 from "../../assets/images/Thumbnail2.png"
import Thumbnail3 from "../../assets/images/Thumbnail3.png"

import ViewsIcon from "../../assets/icon/ViewsIcon.svg"
import DateIcon from "../../assets/icon/DateIcon.svg"

function SideVideoList() {
    return (
        <>
            <Stack direction="Vertical" gap={4} className="ps-3 pe-5 mb-3">
                <Stack direction="vertical" >
                    <Image src={Thumbnail1} className="mb-2" />
                    <Card.Text className="text-white mb-3" style={{ fontSize: '15px' }}>GIMANS KABS NYA NICH ? #qgbacotsantuy</Card.Text>
                    <Card.Text className="fs-6 mb-2" style={{ color: '#555555' }}>qorygore</Card.Text>
                    <Row>
                        <Col md={4}>
                            <Stack direction="horizontal">
                                <div className="d-flex flex-column justify-content-center me-2">
                                    <Image src={ViewsIcon} />
                                </div>
                                <Card.Text className="fs-6" style={{ color: '#555555' }}>284K</Card.Text>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack direction="horizontal">
                                <div className="d-flex flex-column justify-content-center me-2">
                                    <Image src={DateIcon} />
                                </div>
                                <Card.Text className="fs-6" style={{ color: '#555555' }}>06 Sep 2020</Card.Text>
                            </Stack>
                        </Col>
                    </Row>
                </Stack>

                <Stack direction="vertical">
                    <Image src={Thumbnail2} className="mb-2" />
                    <Card.Text className="text-white mb-3" style={{ fontSize: '15px' }}>GIMANS KABS NYA NICH ? #qgbacotsantuy</Card.Text>
                    <Card.Text className="fs-6 mb-2" style={{ color: '#555555' }}>qorygore</Card.Text>
                    <Row>
                        <Col md={4}>
                            <Stack direction="horizontal">
                                <div className="d-flex flex-column justify-content-center me-2">
                                    <Image src={ViewsIcon} />
                                </div>
                                <Card.Text className="fs-6" style={{ color: '#555555' }}>284K</Card.Text>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack direction="horizontal">
                                <div className="d-flex flex-column justify-content-center me-2">
                                    <Image src={DateIcon} />
                                </div>
                                <Card.Text className="fs-6" style={{ color: '#555555' }}>06 Sep 2020</Card.Text>
                            </Stack>
                        </Col>
                    </Row>
                </Stack>

                <Stack direction="vertical">
                    <Image src={Thumbnail3} className="mb-2" />
                    <Card.Text className="text-white mb-3" style={{ fontSize: '15px' }}>GIMANS KABS NYA NICH ? #qgbacotsantuy</Card.Text>
                    <Card.Text className="fs-6 mb-2" style={{ color: '#555555' }}>qorygore</Card.Text>
                    <Row>
                        <Col md={4}>
                            <Stack direction="horizontal">
                                <div className="d-flex flex-column justify-content-center me-2">
                                    <Image src={ViewsIcon} />
                                </div>
                                <Card.Text className="fs-6" style={{ color: '#555555' }}>284K</Card.Text>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack direction="horizontal">
                                <div className="d-flex flex-column justify-content-center me-2">
                                    <Image src={DateIcon} />
                                </div>
                                <Card.Text className="fs-6" style={{ color: '#555555' }}>06 Sep 2020</Card.Text>
                            </Stack>
                        </Col>
                    </Row>
                </Stack>
            </Stack>
        </>
    )
}

export default SideVideoList