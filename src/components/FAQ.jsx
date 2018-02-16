import React, { useState, Fragment } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export const FAQ = () => {
  const hiddenTexts = [{
        label: 'How much will it cost to mint A  Camel?',
        value: ' It will cost 0.05 ETH + gas to mint a  Camel.'
    },
    {
        label: 'How many Camels are Existing on the Blockchain ?',
        value: '9999 Camels are existing on the Blockchain. 3333 For Each Drop will be released in different intervals. In each drop 3000 Camels will be available for minting and 333 will be airdropped to the Winners of the Contests under Community. Join on Discord to Know More.'
    },
    {   
        label: 'How many Camels one can Mint?',
        value: 'An Individual can mint maximum up to 13 Camels.'
    },
    {
        label: 'How can I mint these Camels?',
        value: 'Camels can be minted on our website for the initial release. Once they sell out for each drop, you will be able to trade them at Opensea.io. You will also be able to participate in community giveaways to have a chance of winning prized undercover mints of all 3 drops.  Read Road Map to know more about the Drops.'

    },
    {
        label: 'How long after minting will my NFT be revealed?',
        value: 'Mostly it will reflect as soon as you mint. Sometimes it takes 24-48 hours until your  Camel will be revealed on Opensea.'
    },
    {
        label: 'What are the benefits of owning a Camel?',
        value: 'Besides getting full commercial use rights of the  Camel, Owners are entitled to a membership that will provide them with special perks & number of exclusive benefits of The Rabble. As we Say the s never break the rabble oath.' 
    },
    {   
      label: 'Where my Minted  Camel will be Reflected ?',
      value: 'It will be Reflected on the opensea Platform.'
    },
    {       
      label: 'What are the Plans to Giveaways and Campaigns ?',
      value: 'There are so many exciting Carrot drops planned. Do check out the roadmap to know more in detail and join in THE RABBLE Discord to know more about daily updates.'
    },
    {   
      label: 'Any Other queries on the Rabble ?',
      value: 'Hey Fellow s, we are easily accessible you can get in touch with us on any of our digital platforms Provided. And You can mail us to info@rabbistrabble.com'
    },

  ];

  return (
    <div id="faq">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h2>FAQ'S</h2>
            </div>
          </div>
        </div>
        <div className="faq-panel">
          {/* {hiddenTexts.map((hiddenText, idx) => <AccordionItem key={idx} title={hiddenText.label} detail={hiddenText.value} />)} */}
          <Accordion allowZeroExpanded>
            {
              hiddenTexts.map((hiddenText, idx) => 
                <AccordionItem key={idx}>
                  <AccordionItemHeading>
                      <AccordionItemButton> {hiddenText.label} </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel> {hiddenText.value} </AccordionItemPanel>
                </AccordionItem>
              )
            }
          </Accordion>        
        </div>
      </div>
    </div>
  );
};
