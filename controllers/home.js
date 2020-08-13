module.exports = {
    index: function (req, res) {
        var viewModel = {
            images: [
                {
                    uniqueId: 1,
                    title: "Sample Image 1",
                    description: "this is image 1",
                    filename: "sample1.jpg",
                    views: 10,
                    likes: 50,
                    timestamp: Date.now,
                },
                {
                    uniqueId: 2,
                    title: "Sample Image 2",
                    description: 'this is image 3',
                    filename: "sample2.jpg",
                    views: 40,
                    likes: 5,
                    timestamp: Date.now,
                },
                {
                    uniqueId: 3,
                    title: "Sample Image 3",
                    description: "image 3",
                    filename: "sample3.jpg",
                    views: 6,
                    likes: 40,
                    timestamp: Date.now,
                },
                {
                    uniqueId: 4,
                    title: "Sample Image 4",
                    description: "inage 5",
                    filename: "sample4.jpg",
                    views: 40,
                    likes: 50,
                    timestamp: Date.now,
                },
            ],
        };
        res.render("index", viewModel);
    },
};
