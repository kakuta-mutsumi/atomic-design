import React, { Component } from 'react';
import styles from './styles.css';
import Img from '../../atoms/Img/index.js';
import Heading from '../../atoms/Heading/index.js';
import { InfoTxt } from '../../atoms/Txt/index.js';
import Time from '../../atoms/Time/index.js';
import DeleteButton from '../../molecules/DeleteButton/index.js';

export class NotificationContainer extends Component {
    constructor() {
        super();
        this.onClickDelete = ::this.onClickDelete; 
        //多分、this.onClickDelete.bind(this) と同じ。メンバー変数(this)をonClickDelete内で使うthisにセット
    }

    render() {
        const { presenter, onClickDelete:propsOnClickDelete, ...props } = this.props;
        const onClickDelete = propsOnClickDelete ? this.onClickDelete : null;
        const presenterProps = { onClickDelete, ...props };
        return presenter(presenterProps);
    }

    onClickDelete(...args) {
        // DeleteButtonのonClickの引数にprogramの情報も渡したい
        const { onClickDelete, program } = this.props;
        onClickDelete(...args, program);
    }
}

const NotificationPresenter = ({
    program,
    className,
    onClickDelete,
    ...props,
}) => (
    <section className={[styles.root, className].join(' ')} {...props}>
        <div>
            <Img src={ program.thumbnail } className={styles.media} width="128" height="72"/>
        </div>
        <div className={styles.body}>
            <Heading level={3} visualLevel={6}>{program.title}</Heading>
            <InfoTxt size="s">{program.channelName}</InfoTxt>
            <InfoTxt size="s" className={styles.time}>
                <Time format="MM月DD日(dd)HH:mm">{program.startAt}</Time> 〜 <Time format="HH:mm">{program.endAt}</Time>
            </InfoTxt>
            <DeleteButton onClick={onClickDelete} className={styles.del}/>
        </div>
    </section>
);

const Notification = props => (
    <NotificationContainer presenter={ presenterProps => <NotificationPresenter {...presenterProps}/>} {...props}/>
);

export default Notification;