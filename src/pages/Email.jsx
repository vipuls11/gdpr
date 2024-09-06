import Minimenu from "./mini_menu/Minimenu"
import './css/Email.css'

function Email() {
    const icon = "Assets/arrowdownload.svg"
    return (
        <div className="Dashboard">
            <div className="">
                <Minimenu icon={icon} dashboard="Email Setting" />
            </div>
            <div className="Form_Dashboard">
                <h4>Add Schedule</h4>
                <div className="Email_container">
                    <section className="recurrence-pattern">
                        <span className="Rec_h4"><h4 className="recurrence">Recurrence Pattern</h4></span>

                        <div className="frequency_radio">
                            <label className="labels">
                                <input type="radio" name="frequency" value="" /> Daily
                            </label>
                            <label className="labels">
                                <input type="radio" name="frequency" value="" /> Weekly
                            </label>
                            <label className="labels">
                                <input type="radio" name="frequency" value="" /> Monthly </label>
                            <label className="labels">
                                <input type="radio" name="frequency" value="" /> Yearly
                            </label>
                            <label className="labels">
                                Recur every <input type="number" name="" className="weeks" /> week(s) on:
                            </label>
                        </div>



                        <div className="days-of-week">
                            <label className="labels"><input type="checkbox" name="day" value="sunday" /> Sunday</label>
                            <label className="labels"><input type="checkbox" name="day" value="monday" /> Monday</label>
                            <label className="labels"><input type="checkbox" name="day" value="tuesday" /> Tuesday</label>
                            <label className="labels"><input type="checkbox" name="day" value="wednesday" /> Wednesday</label>
                            <label className="labels"><input type="checkbox" name="day" value="thursday" /> Thursday</label>
                            <label className="labels"><input type="checkbox" name="day" value="friday" /> Friday</label>
                            <label className="labels"><input type="checkbox" name="day" value="saturday" /> Saturday</label>
                        </div>
                    </section>

                    <div className="range_container">
                        <section class="range-of-recurrence">
                            <span className="Ran_h4"><h4 className="recurrence">Range of Recurrence</h4></span>
                            <div class="upper_range">
                                <label>
                                    Start
                                    <input type="date" name="start-date" className="start_date" />
                                </label>
                                <label className="labels">
                                    <input type="radio" name="end" /> <p>No end date</p>
                                </label>
                                <label className="labels">
                                    <input type="radio" name="end" /> End after
                                </label>
                                <label className="labels">
                                    <input type="number" className="occurence" /> occurrences
                                </label>
                            </div>


                            <div class="lower">
                                <label className="labels">
                                    <input type="radio" name="end" value="end-by" /> End by
                                </label>
                                <input type="date" name="end-date" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Email