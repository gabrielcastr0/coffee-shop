import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './style.css';
import background from './back.png'; // importando banner
import expresso from './expresso-background.jpg'; // importando expresso background
import frape from './frape.png' // importando frape

const items = [
    {
      src: background,
      altText: 'Primeiro Slide',
      caption: 'Banner CoffeeShop'
    },

    {
      src: background,
      altText: 'Segundo Slide',
      caption: 'Banner CoffeeShop'
    },

    {
      src: background,
      altText: 'Terceiro Slide',
      caption: 'Banner CoffeeShop'
    }
];

const Page = () => {

    // Carousel
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} width="100%"/>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      return (
        <div>

            {/* Carousel */}
            <section>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </section>

            {/* Cards */}
            <section>
              <div className="container-fluid">

                <span className="categorias">Categorias</span>

                <div className="row mt-3">

                  <div className="col-sm-3">
                    <Card>
                      <CardImg top width="100%" src={expresso} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Expressos</CardTitle>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="col-sm-3">
                    <Card>
                      <CardImg top width="100%" src={expresso} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Expressos</CardTitle>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="col-sm-3">
                    <Card>
                      <CardImg top width="100%" src={expresso} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Expresos</CardTitle>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="col-sm-3">
                    <Card>
                      <CardImg top width="100%" src={expresso} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Expresos</CardTitle>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Cards 2 */}
            <section>
              <div className="container-fluid">

                <span className="categorias">Produtos mais vendidos</span>

                <div className="row mt-3">

                  <div className="col-sm-3">
                    <Card>
                      <CardImg top width="100%" src={frape} alt="Card image cap" />
                      <CardBody className="produtos-title">
                        <CardTitle>Frapê Baunilha</CardTitle>
                        <CardSubtitle>330ML</CardSubtitle>
                        <CardSubtitle className="card-subtitle-2">R$10, 50</CardSubtitle>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="col-sm-3">
                    <Card>
                      <CardImg top width="100%" src={frape} alt="Card image cap" />
                      <CardBody className="produtos-title">
                        <CardTitle>Frapê Baunilha</CardTitle>
                        <CardSubtitle>330ML</CardSubtitle>
                        <CardSubtitle className="card-subtitle-2">R$10, 50</CardSubtitle>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="col-sm-3">
                    <Card>
                      <CardImg top width="100%" src={frape} alt="Card image cap" />
                      <CardBody className="produtos-title">
                        <CardTitle>Frapê Baunilha</CardTitle>
                        <CardSubtitle>330ML</CardSubtitle>
                        <CardSubtitle className="card-subtitle-2">R$10, 50</CardSubtitle>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="col-sm-3">
                    <Card>
                      <CardImg top width="100%" src={frape} alt="Card image cap" />
                      <CardBody className="produtos-title">
                        <CardTitle className="produtos-title-main">Frapê Baunilha</CardTitle>
                        <CardSubtitle>330ML</CardSubtitle>
                        <CardSubtitle className="card-subtitle-2">R$10, 50</CardSubtitle>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

        </div>
      );
}

export default Page;