import React from "react";
import PlayButton from "./PlayButton";
import TempoSlider from "./TempoSlider";
import TempoDisplay from "./TempoDisplay";
import ResetButton from "./ResetButton";
import DeleteButton from "./DeleteButton";
import CreateButton from "./CreateButton";
import UpdateButton from "./UpdateButton";
import EditButton from "./EditButton";
import styles from "./Buttons.module.css";

const Buttons = props => {
    const { 
        processing,
        authUser, 
        editable, 
        track,
        isPlaying,
        onTogglePlay,
        sequence_length,
        onLengthChange,
        onReset,
        onCreate,
        onUpdate,
        onDelete,
        tempo,
        onTempoChange,
        trackId,
    } = props;

    return (
        <div id="buttons" className={styles.root}>
            {editable 
                ?
                    <>
                    <div className={styles.wrapperTop}>
                        <PlayButton
                            isPlaying={isPlaying}
                            onTogglePlay={onTogglePlay}
                            />
                        <ResetButton onReset={onReset} />
                        {track.id === 0
                            ?   <CreateButton onCreate={onCreate} processing={processing} />
                            :   <>
                                    <UpdateButton onUpdate={onUpdate} processing={processing} />
                                    <DeleteButton onDelete={onDelete} processing={processing} />
                                </>
                        }
                    </div>
                    <div className={styles.wrapperBottom}>
                        <TempoDisplay tempo={tempo} />
                        <TempoSlider tempo={tempo} onTempoChange={onTempoChange} />
                    </div>
                    </>
                :

                    <div className={styles.wrapperTop}>
                        <PlayButton
                            isPlaying={isPlaying}
                            onTogglePlay={onTogglePlay}
                            />
                    </div>
            }   
        </div>
    )
};

export default Buttons;
