import React from 'react'
import { Container } from 'react-bootstrap'
import './Index.css'

export default function Index() {
    return (
        <div>
            <Container>
                <table>
                <tr className="athing">
                    <td className="title">
                        <span className="rank">1.</span>
                    </td>
                    <td className="votelinks">
                        <div className='text-center'>
                            <a className='cursor' href='/'>
                                <div className="votearrow" title="upvote"></div>
                            </a>
                        </div>
                    </td>
                    <td className="title">
                        <a className="storylink" href="https://thehustle.co/why-the-university-of-florida-gets-a-20m-cut-of-gatorade-profits-every-year/">University of Florida gets around $20M from Gatorade profits every year</a>
                        <span className="sitebit comhead"> (<a href="/">
                            <span className="sitestr">thehustle.co</span>
                        </a>)
                        </span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td className="postDetails">
                        <span className="score">43 points</span> by <a className="hnuser" href="/">Anon84</a> 
                        <span >
                            <a className="time" href="/">2 hours ago</a>
                            </span> | <a href='/' className='pointer'>hide</a> | <a href="/">1 comment</a>
                            </td>
                            </tr>
                </table>
            </Container>
        </div>
    )
}
