import {Component} from 'react'

import {
  AppContainer,
  Heading,
  FormMemeContainer,
  FormContainer,
  MemeContainer,
  InputContainer,
  InputLabel,
  TextInput,
  SelectInput,
  FontOption,
  GenerateButton,
  MemeText,
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
    generateMeme: false,
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({generateMeme: true})
  }

  onChangeImgUrl = event => {
    this.setState({imgUrl: event.target.value})
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

  render() {
    const {imgUrl, topText, bottomText, fontSize, generateMeme} = this.state

    return (
      <AppContainer>
        <Heading>Meme Generator</Heading>
        <FormMemeContainer>
          <FormContainer onSubmit={this.onSubmitForm}>
            <InputContainer>
              <InputLabel htmlFor="imageInput"> Image Url </InputLabel>
              <TextInput
                type="text"
                id="imageInput"
                value={imgUrl}
                onChange={this.onChangeImgUrl}
                placeholder="Enter the Image URL"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="topTextInput"> Top Text </InputLabel>
              <TextInput
                type="text"
                id="topTextInput"
                value={topText}
                onChange={this.onChangeTopText}
                placeholder="Enter the Top Text"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="bottomTextInput"> Bottom Text </InputLabel>
              <TextInput
                type="text"
                id="bottomTextInput"
                value={bottomText}
                onChange={this.onChangeBottomText}
                placeholder="Enter the Bottom Text"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="fontSizeInput"> Font Size </InputLabel>
              <SelectInput
                id="fontSizeInput"
                value={fontSize}
                onChange={this.onChangeFontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <FontOption key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </FontOption>
                ))}
              </SelectInput>
            </InputContainer>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
          {generateMeme && (
            <MemeContainer data-testid="meme" imageUrl={imgUrl}>
              <MemeText fontSize={fontSize}>{topText}</MemeText>
              <MemeText fontSize={fontSize}>{bottomText}</MemeText>
            </MemeContainer>
          )}
        </FormMemeContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
