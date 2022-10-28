import './App.css'
import meetingWithMotorVehiclesAtNightMp3 from './assets/audio/夜间与机动车会车.mp3'
import followCarCloselyInSameDirectionAtNightMp3 from './assets/audio/夜间同方向近距离跟车行驶.mp3'
import drivingAtNightWithoutPoorStreetLightsMp3 from './assets/audio/夜间在没有路灯照明不良条件下行驶.mp3'
import temporaryParkingRoadsideAtNightMp3 from './assets/audio/夜间在路边临时停车.mp3'
import overtakeAtNightMp3 from './assets/audio/夜间超越前方车辆.mp3'
import throughIntersectionWithSignalLightAtNight from './assets/audio/夜间通过有信号灯路口.mp3'
import enterBadRoad from './assets/audio/进入不良道路.mp3'
import enterWellLitRoad from './assets/audio/进入照明良好道路.mp3'
import throughPedestrianCrossing from './assets/audio/通过人行横道.mp3'
import throughIntersection from './assets/audio/通过前方路口.mp3'
import throughSlopeRoad from './assets/audio/通过坡路.mp3'
import throughSharpTurn from './assets/audio/通过急弯.mp3'
import throughArchBridge from './assets/audio/通过拱桥.mp3'
import { useState } from "react";

const examData = [
  {
    content: '夜间与机动车会车',
    mp3: meetingWithMotorVehiclesAtNightMp3,
    answer: '近光灯',
  },
  {
    content: '夜间同方向近距离跟车行驶',
    mp3: followCarCloselyInSameDirectionAtNightMp3,
    answer: '近光灯',
  },
  {
    content: '夜间在没有路灯照明不良条件下行驶',
    mp3: drivingAtNightWithoutPoorStreetLightsMp3,
    answer: '远光灯',
  },
  {
    content: '夜间在路边临时停车',
    mp3: temporaryParkingRoadsideAtNightMp3,
    answer: '小灯+危险灯',
  },
  {
    content: '夜间超越前方车辆',
    mp3: overtakeAtNightMp3,
    answer: '闪灯两次',
  },
  {
    content: '夜间通过有信号灯路口',
    mp3: throughIntersectionWithSignalLightAtNight,
    answer: '近光灯',
  },
  {
    content: '进入不良道路',
    mp3: enterBadRoad,
    answer: '远光灯',
  },
  {
    content: '进入照明良好道路',
    mp3: enterWellLitRoad,
    answer: '近光灯',
  },
  {
    content: '通过人行横道',
    mp3: throughPedestrianCrossing,
    answer: '闪灯两次',
  },
  {
    content: '通过前方路口',
    mp3: throughIntersection,
    answer: '闪灯两次',
  },
  {
    content: '通过坡路',
    mp3: throughSlopeRoad,
    answer: '闪灯两次',
  },
  {
    content: '通过急弯',
    mp3: throughSharpTurn,
    answer: '闪灯两次',
  },
  {
    content: '通过拱桥',
    mp3: throughArchBridge,
    answer: '闪灯两次',
  },
]


const App = () => {
  const [examIndex, setExamIndex] = useState(-1)
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)

  const nextExamIndex = () => {
    let newExamIndex = examIndex
    while (newExamIndex === examIndex) {
      newExamIndex = Math.floor(Math.random() * 100 % examData.length)
      console.log('nextExamIndex', newExamIndex)
    }
    setExamIndex(newExamIndex)
  }

  const submitAnswer = (answer: string) => {
    const exam = examData[examIndex]
    if (answer === exam.answer) {
      setCorrectCount(correctCount + 1)
    } else {
      alert(`错误！【${exam.content}】的正确答案是【${exam.answer}】`)
      setIncorrectCount(incorrectCount + 1)
    }
    nextExamIndex()
  }

  return (
    <>
      <h1>C1 科目三灯光模拟考试</h1>
      {examIndex < 0 && (
        <>
          <button onClick={nextExamIndex}>系好安全带，发动机点火，开始灯光考试</button>
          <br/>
        </>
      )}
      {examIndex >= 0 && (
        <audio
          src={examData[examIndex].mp3}
          controls
          autoPlay
        />
      )}
      <fieldset>
        <legend>灯光操作</legend>
        <button onClick={() => submitAnswer('近光灯')}>近光灯</button>
        <br/>
        <button onClick={() => submitAnswer('远光灯')}>远光灯</button>
        <br/>
        <button onClick={() => submitAnswer('闪灯两次')}>闪灯两次</button>
        <br/>
        <button onClick={() => submitAnswer('小灯+危险灯')}>小灯+危险灯</button>
        <br/>
      </fieldset>
      <fieldset>
        <legend>统计</legend>
        <p>正确次数：{correctCount}</p>
        <p>错误次数：{incorrectCount}</p>
        <p>正确率：{(correctCount / (correctCount + incorrectCount) * 100).toFixed(2)}%</p>
      </fieldset>
      <p>Created by
        <a
          href="https://github.com/jerryshell"
          target="_blank"
        > @jerryshell</a>
      </p>
    </>
  )
}

export default App
