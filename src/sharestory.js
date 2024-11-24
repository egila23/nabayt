import React from 'react';

const ShareStories = () => {
    return (
        <section>
            <div>
                <h2>Share Your Story</h2>
                <p>
                Let your voice be heard.
                </p>
                <form>
                <textarea placeholder="story title" rows="2" />
                <textarea placeholder="story catagory" rows="2" />
                    <textarea placeholder="story detail" rows="10" />
                    <button type="submit">Submit Story</button>
                </form>
            </div>
        </section>
    );
};

export default ShareStories;