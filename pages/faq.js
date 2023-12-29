import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubscribeForm from '../components/Common/SubscribeForm';
import styles from './faq.module.css';

const Faq = () => {
    return (
        <>
            <PageBanner
                pageTitle="Frequently Asked Questions"
                homePageUrl="/"
                homePageText="Home"
                activePageText="FAQ's"
            />

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className={`${styles['tab']} ${styles['faq-accordion-tab']}`}>
                        <Tabs selectedTabClassName={`react-tabs__tab--selected ${styles['react-tabs__tab--selected']}`}>
                            <TabList className={`react-tabs__tab-list ${styles['react-tabs__tab-list']}`}>
                                <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}><i className='bx bx-flag'></i> <span>Getting Started</span></Tab>
                                <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}><i className='bx bxs-badge-dollar'></i> <span>Pricing & Planes</span></Tab>
                                <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}><i className='bx bx-shopping-bag'></i> <span>Sales Question</span></Tab>
                                <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}><i className='bx bx-book-open'></i> <span>Usage Guides</span></Tab>
                                <Tab className={`react-tabs__tab ${styles['react-tabs__tab']}`}><i className='bx bx-info-circle'></i> <span>General Guide</span></Tab>
                            </TabList>

                            <TabPanel>
                                <div className={styles['faq-accordion']}>
                                    <Accordion className={`accordion ${styles['accordion']}`} allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a study abroad program on whatsnxt.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className={styles['faq-accordion']}>
                                    <Accordion className={`accordion ${styles['accordion']}`} allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a study abroad program on whatsnxt.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className={styles['faq-accordion']}>
                                    <Accordion className={`accordion ${styles['accordion']}`} allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a study abroad program on whatsnxt.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className={styles['faq-accordion']}>
                                    <Accordion className={`accordion ${styles['accordion']}`} allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a study abroad program on whatsnxt.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className={styles['faq-accordion']}>
                                    <Accordion className={`accordion ${styles['accordion']}`} allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem  uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How can I contact a school directly?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Where should I study abroad?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a study abroad program on whatsnxt.com?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    How do I find a school where I want to study?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem className={`accordion__item ${styles['accordion__item']}`} uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className={`accordion__button ${styles['accordion__button']}`}>
                                                    Am I eligible for admission?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={`accordion__panel ${styles['accordion__panel']}`}>
                                                <p>You can contact a school by filling out a <a href="contact.html">“Contact Us”</a> form. This form can be found to the right of both the institute and education program profiles and also at the bottom of these profiles.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>

            <SubscribeForm />
        </>
    )
}

export default Faq;