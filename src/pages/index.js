import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'


export default function Home() {

  const [content, setContent] = useState("")
  const [input, setInput] = useState("")
  const [replaceTxt, setReplaceTxt] = useState([])

  useEffect(() => {
    function replaceString() {
      let str = ""
      if (replaceTxt[0] && content[0]) {
        let arr = replaceTxt.split('<br />')
        arr.map((key0) => {
          let caps = key0.charAt(0).toUpperCase() + key0.slice(1)
          str = str + content.replaceAll("xx", key0).replaceAll("Xx", caps) + "<br />"
        })
      }
      setInput(str)
    }
    replaceString()
  }, [content, replaceTxt])

  return (
    <div>
      <main>
        <h2 className="text-center">
          Hard Coding Tool
        </h2>

        <Container>
          <Row>
            <Col>
              <textarea cols="60" rows="8" onChange={e => setContent(e.target.value)}></textarea>
              <br />
              <p class="border-bottom border-3 border-dark">without HTML tag</p>
              <div dangerouslySetInnerHTML={{ __html: input }}></div>
              <br />
              <p class="border-bottom border-3 border-dark">with HTML tag</p>
              <div>{input}</div>
            </Col>
            <Col>
              <Row>
                <Col>
                  xx/Xx
                  <br />
                  <textarea rows="8" onChange={e => setReplaceTxt(e.target.value.replace(/\r\n|\r|\n/g, "<br />"))}></textarea>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <br />
              <br />
              <h3>Usage</h3>
      const [xx,setXx] = useState()

      <br />
              <br />
              <h3>Snipp</h3>
              <pre>{`arr.map((key0, index) => {\nreturn <option key={index} value={key0}>{key0}</option>\n})`}
              </pre>
              <br />
              {`<div dangerouslySetInnerHTML={{ __html: input }}></div>`}
            </Col>
          </Row>
        </Container>
      </main>

      <footer className={styles.footer}>
        Ting © 2021
      </footer>
    </div>
  )
}
