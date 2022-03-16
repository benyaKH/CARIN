import { Canvas } from "components";
import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from './styles.module.css';

export class ZoomAbleCanvas extends Component {
    render() {
      return (
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
          doubleClick={{ disabled: true }}
          alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <div className="tools w-72 bg-gray-200 justify-center text-center">
                <button className={styles.button} onClick={() => zoomIn()}>ZoomIn</button>
                <button className={styles.button} onClick={() => zoomOut()}>ZoomOut</button>
                <button className={styles.button} onClick={() => resetTransform()}>Reset</button>
              </div>
              <TransformComponent>
                <Canvas></Canvas>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      );
    }
  }