import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadImages } from '../../actions';
import ButtonLoad from '../button';

export default function ContentGrid() {
    const dispatch = useDispatch();
    const { images, loading, error} = useSelector(state => state);

    useEffect(() => {
        dispatch(loadImages())
    }, [])
    return (
        <>
            <Content>
                <SectionGrid>
                    {
                        images.map(image => (
                            <div
                                key={image.id}
                                className={`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}
                            >
                                <Image
                                    src={image.urls.small}
                                    alt={image.user.username}
                                />
                            </div>
                        ))
                    }
                </SectionGrid>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <ButtonLoad loading={loading} loadImages={() => dispatch(loadImages())} />   
            </Content>
        </>
        
    );
}

const Content = styled.div`
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SectionGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 25px;
    grid-gap: 25px;
    grid-auto-flow: dense;
    align-items: stretch;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
`

const Error = styled.div`
    background: lightsalmon;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid tomato;
`

