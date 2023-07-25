import {Component} from 'react'

import {
  MainContainer,
  Heading,
  MemeGeneratorContainer,
  MemeContainer,
  MemeText,
  MemeOptionsContainer,
  Label,
  Input,
  BreakLine,
  Select,
  Option,
  GenerateBtn,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    this.onChangeImageUrl()
    this.onChangeTopText()
    this.onChangeBottomText()
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <MemeGeneratorContainer>
          <MemeContainer testid="meme" bgImage={imageUrl}>
            <MemeText fontSize={fontSize}>{topText}</MemeText>
            <MemeText fontSize={fontSize}>{bottomText}</MemeText>
          </MemeContainer>
          <MemeOptionsContainer onSubmit={this.onGenerateMeme}>
            <Label htmlFor="imageUrl">Image URL</Label>
            <BreakLine />
            <Input
              onChange={this.onChangeImageUrl}
              id="imageUrl"
              type="text"
              value={imageUrl}
              placeholder="Enter the Image URL"
            />
            <BreakLine />
            <Label htmlFor="topText">Top Text</Label>
            <BreakLine />
            <Input
              onChange={this.onChangeTopText}
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
            />
            <BreakLine />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <BreakLine />
            <Input
              onChange={this.onChangeBottomText}
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
            />
            <BreakLine />
            <Label htmlFor="fontSize">Font Size</Label>
            <BreakLine />
            <Select
              onChange={this.onChangeFontSize}
              value={fontSize}
              id="fontSize"
            >
              {fontSizesOptionsList.map(eachOption => (
                <Option value={eachOption.optionId} key={eachOption.optionId}>
                  {eachOption.displayText}
                </Option>
              ))}
            </Select>
            <GenerateBtn type="submit">Generate</GenerateBtn>
          </MemeOptionsContainer>
        </MemeGeneratorContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
