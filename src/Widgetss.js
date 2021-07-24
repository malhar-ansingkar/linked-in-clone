import React from 'react'
import "./Widgetss.css";
import Info from '@material-ui/icons/Info';
import { FiberManualRecord } from '@material-ui/icons';


function Widgetss() {
    const newsArticle = (heading ,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
        {newsArticle("How you doin?","I'm doing fine honey what about you?")}
        {newsArticle("Pivot!! Pivot!! Pivot!!","Shut Up!! Shut Up!! Shut Up!!")}
        {newsArticle("It happend in London","IN LOOONNDDDOOONN")}
        {newsArticle("Smelly Cat","Smelly Cat, Smelly Cat, What are they feeding you? Smelly Cat, Smelly Cat, It's not your fault")}
        </div>
    )
}
 
export default Widgetss
