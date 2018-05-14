import React from 'react';
import Txt, { InfoTxt, WarningTxt } from './index.js'

export default stories => stories
    .add('テキスト -S', () => <Txt size="s" >テキストを表示</Txt>)
    .add('テキスト -M', () => <Txt >テキストを表示</Txt>)
    .add('テキスト -L', () => <Txt size="l" >テキストを表示</Txt>)
    .add('情報テキスト -S', () => <InfoTxt size="s" >テキストを表示</InfoTxt>)
    .add('情報テキスト -M', () => <InfoTxt>テキストを表示</InfoTxt>)
    .add('情報テキスト -L', () => <InfoTxt size="l" >テキストを表示</InfoTxt>)
    .add('警告テキスト -S', () => <WarningTxt size="s" >テキストを表示</WarningTxt>)
    .add('警告テキスト -M', () => <WarningTxt>テキストを表示</WarningTxt>)
    .add('警告テキスト -L', () => <WarningTxt size="l" >テキストを表示</WarningTxt>)
    