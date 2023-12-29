import React from 'react';
import styles from './GoTop.module.css';

const GoTop = ({scrollStepInPx, delayInMs}) => {

    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });
    }, [])
    
    const onScrollStep = () => {
        if (window.pageYOffset === 0){
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <div className={`${styles['go-top']} ${thePosition ? styles['active'] : ''}`} onClick={scrollToTop}>
                <i className='bx bx-chevron-up'></i>
            </div>
        )
    }

    return (
        <>
            {renderGoTopIcon()}
        </>
    )
}

export default GoTop;