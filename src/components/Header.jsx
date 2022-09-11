import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    
    & > p {
        font-size: 2.2rem;
        margin: 0 0 0 5px;
    }
`

const SwitchContainer = styled.div`
    display: flex;
    gap: 1em;

    & > p {
        font-size: .8rem;
        letter-spacing: 1px;
        margin: 5px 0;
        align-self: flex-end;
    }
`

const SwitchLabelsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70px;
    padding: 4px 5px;

    & > p {
        margin: 0;
    }
`

const Switch = styled.div`
    display: flex;
    justify-content: ${({switchPos}) => {
        if (switchPos === 1) return 'flex-start'
        else if (switchPos === 2) return 'center'
        else return 'flex-end'
    }};
    padding: 5px 5px;
    border-radius: 50px;
    background-color: var(--secondary-bg);
    cursor: pointer;

    & > div {
        width: 17px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: var(--key2-bg);
    }
`

const Header = ({switchPos, toggleSwitch}) => {
    return (
        <HeaderContainer>
          <p>calc</p>
          <SwitchContainer>
            <p>THEME</p>
            <div>
                <SwitchLabelsContainer>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </SwitchLabelsContainer>
                <Switch
                    switchPos={switchPos} 
                    onClick={toggleSwitch}
                >
                    <div></div>
                </Switch>
            </div>
          </SwitchContainer>
        </HeaderContainer>
    )
}

export default Header