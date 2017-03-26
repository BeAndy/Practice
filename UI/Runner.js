/**
 * Created by Andrew on 3/6/2017.
 */

var user = 'BeAndy';

var articleModel = (function () {
    var tags = ['USA', 'Russia', 'Minsk', 'GCHQ', 'EU', 'Prince', 'Fillon', 'Kim', 'SK', 'Turkey'];

    var articles = [
        {
            id: '1',
            title: 'GCHQ: Russian cyber‑threat to British elections',
            summary: 'Spies at GCHQ have called an emergency summit with Britain’s political parties after warning them that they are at risk of Russian cyber-attacks disrupting the next general election.Security sources say GCHQ now regards protecting the political system from foreign hackers as “priority work”. They fear that Kremlin-backed hackers could steal and leak internal emails or publish private databases of voters’ political views in an attempt to damage the standing of political parties with the public.',
            createdAt: new Date('2017-03-07T13:40:10'),
            tags: ['GCHQ', 'Russia'],
            author: 'Kine Shulz',
            content: 'Spies at GCHQ have called an emergency summit with Britain’s political parties after warning them that they are at risk of Russian cyber-attacks disrupting the next general election.Security sources say GCHQ now regards protecting the political system from foreign hackers as “priority work”. They fear that Kremlin-backed hackers could steal and leak internal emails or publish private databases of voters’ political views in an attempt to damage the standing of political parties with the public.',
            imageSrc: "images/1.jpg"
        },
        {
            id: '2',
            title: 'May ‘will ask EU to pay back our £9bn’',
            summary: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun — dramatically cutting Britain’s final bill.Senior government sources say that when the prime minister triggers article 50, she will point out that Britain is entitled to the return of funds held by the European Investment Bank (EIB).',
            createdAt: new Date('2017-01-27T23:11:00'),
            tags: ['USA', 'EU'],
            author: 'Tim Shipman',
            content: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun — dramatically cutting Britain’s final bill.Senior government sources say that when the prime minister triggers article 50, she will point out that Britain is entitled to the return of funds held by the European Investment Bank (EIB).',
            imageSrc: "images/2.jpg"
        },
        {
            id: '3',
            title: 'Prince teases Spreadsheet Phil over budget',
            summary: 'One of them is known for his verbal gaffes and the other was once seen as a safe pair of hands, but when Philip met Philip last week it was the chancellor of the exchequer who was on the receiving end for blundering in public. Under fire from MPs over his budget, which raised national insurance for self-employed',
            createdAt: new Date('2016-02-22T15:10:13'),
            tags: ['EU', 'Prince'],
            author: 'Tim Wilson',
            content: 'One of them is known for his verbal gaffes and the other was once seen as a safe pair of hands, but when Philip met Philip last week it was the chancellor of the exchequer who was on the receiving end for blundering in public. Under fire from MPs over his budget, which raised national insurance for self-employed',
            imageSrc: "images/3.jpg"

        },
        {
            id: '4',
            title: 'Fillon’s campaign hit by antisemitism claims',
            summary: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            createdAt: new Date('2017-02-25T13:10:40'),
            tags: ['USA', 'Fillon'],
            author: 'Adam Sage',
            content: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            imageSrc: "images/4.jpg"
        },
        {
            id: '5',
            title: 'South Korea set to cosy up to Kim',
            summary: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            createdAt: new Date('2017-03-17T23:14:15'),
            tags: ['Kim', 'SK'],
            author: 'Philip Sherwell',
            content: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            imageSrc: "images/5.jpg"
        },
        {
            id: '6',
            title: 'Far right seize on Turkey’s confrontation with Europe',
            summary: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            createdAt: new Date('2017-03-04T13:11:15'),
            tags: ['EU', 'Turkey'],
            author: 'Bruno Waterfield',
            content: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            imageSrc: "images/6.jpg"
        },
        {
            id: '7',
            title: 'GCHQ: Russian cyber‑threat to British elections',
            summary: 'Spies at GCHQ have called an emergency summit with Britain’s political parties after warning them that they are at risk of Russian cyber-attacks disrupting the next general election.Security sources say GCHQ now regards protecting the political system from foreign hackers as “priority work”. They fear that Kremlin-backed hackers could steal and leak internal emails or publish private databases of voters’ political views in an attempt to damage the standing of political parties with the public.',
            createdAt: new Date('2017-02-27T13:40:10'),
            tags: ['GCHQ', 'Russia'],
            author: 'Kine Shulz',
            content: 'Spies at GCHQ have called an emergency summit with Britain’s political parties after warning them that they are at risk of Russian cyber-attacks disrupting the next general election.Security sources say GCHQ now regards protecting the political system from foreign hackers as “priority work”. They fear that Kremlin-backed hackers could steal and leak internal emails or publish private databases of voters’ political views in an attempt to damage the standing of political parties with the public.',
            imageSrc: "images/1.jpg"
        },
        {
            id: '8',
            title: 'May ‘will ask EU to pay back our £9bn’',
            summary: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun — dramatically cutting Britain’s final bill.Senior government sources say that when the prime minister triggers article 50, she will point out that Britain is entitled to the return of funds held by the European Investment Bank (EIB).',
            createdAt: new Date('2017-02-27T23:11:00'),
            tags: ['USA', 'EU'],
            author: 'Tim Shipman',
            content: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun — dramatically cutting Britain’s final bill.Senior government sources say that when the prime minister triggers article 50, she will point out that Britain is entitled to the return of funds held by the European Investment Bank (EIB).',
            imageSrc: "images/2.jpg"
        },
        {
            id: '9',
            title: 'Prince teases Spreadsheet Phil over budget',
            summary: 'One of them is known for his verbal gaffes and the other was once seen as a safe pair of hands, but when Philip met Philip last week it was the chancellor of the exchequer who was on the receiving end for blundering in public. Under fire from MPs over his budget, which raised national insurance for self-employed',
            createdAt: new Date('2016-02-29T15:10:13'),
            tags: ['EU', 'Prince'],
            author: 'Tim Wilson',
            content: 'One of them is known for his verbal gaffes and the other was once seen as a safe pair of hands, but when Philip met Philip last week it was the chancellor of the exchequer who was on the receiving end for blundering in public. Under fire from MPs over his budget, which raised national insurance for self-employed',
            imageSrc: "images/3.jpg"
        },
        {
            id: '10',
            title: 'Fillon’s campaign hit by antisemitism claims',
            summary: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            createdAt: new Date('2017-02-25T13:10:40'),
            tags: ['USA', 'Fillon'],
            author: 'Adam Sage',
            content: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            imageSrc: "images/4.jpg"
        },
        {
            id: '11',
            title: 'South Korea set to cosy up to Kim',
            summary: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            createdAt: new Date('2017-02-27T23:14:15'),
            tags: ['Kim', 'SK'],
            author: 'Philip Sherwell',
            content: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            imageSrc: "images/5.jpg"
        },
        {
            id: '12',
            title: 'Far right seize on Turkey’s confrontation with Europe',
            summary: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            createdAt: new Date('2017-03-04T13:11:15'),
            tags: ['EU', 'Turkey'],
            author: 'Bruno Waterfield',
            content: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            imageSrc: "images/6.jpg"
        }, {
            id: '13',
            title: 'GCHQ: Russian cyber‑threat to British elections',
            summary: 'Spies at GCHQ have called an emergency summit with Britain’s political parties after warning them that they are at risk of Russian cyber-attacks disrupting the next general election.Security sources say GCHQ now regards protecting the political system from foreign hackers as “priority work”. They fear that Kremlin-backed hackers could steal and leak internal emails or publish private databases of voters’ political views in an attempt to damage the standing of political parties with the public.',
            createdAt: new Date('2017-02-27T13:40:10'),
            tags: ['GCHQ', 'Russia'],
            author: 'Kine Shulz',
            content: 'Spies at GCHQ have called an emergency summit with Britain’s political parties after warning them that they are at risk of Russian cyber-attacks disrupting the next general election.Security sources say GCHQ now regards protecting the political system from foreign hackers as “priority work”. They fear that Kremlin-backed hackers could steal and leak internal emails or publish private databases of voters’ political views in an attempt to damage the standing of political parties with the public.',
            imageSrc: "images/1.jpg"
        },
        {
            id: '14',
            title: 'May ‘will ask EU to pay back our £9bn’',
            summary: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun — dramatically cutting Britain’s final bill.Senior government sources say that when the prime minister triggers article 50, she will point out that Britain is entitled to the return of funds held by the European Investment Bank (EIB).',
            createdAt: new Date('2017-02-27T23:11:00'),
            tags: ['USA', 'EU'],
            author: 'Tim Shipman',
            content: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun — dramatically cutting Britain’s final bill.Senior government sources say that when the prime minister triggers article 50, she will point out that Britain is entitled to the return of funds held by the European Investment Bank (EIB).',
            imageSrc: "images/2.jpg"
        },
        {
            id: '15',
            title: 'Prince teases Spreadsheet Phil over budget',
            summary: 'One of them is known for his verbal gaffes and the other was once seen as a safe pair of hands, but when Philip met Philip last week it was the chancellor of the exchequer who was on the receiving end for blundering in public. Under fire from MPs over his budget, which raised national insurance for self-employed',
            createdAt: new Date('2016-02-29T15:10:13'),
            tags: ['EU', 'Prince'],
            author: 'Tim Wilson',
            content: 'One of them is known for his verbal gaffes and the other was once seen as a safe pair of hands, but when Philip met Philip last week it was the chancellor of the exchequer who was on the receiving end for blundering in public. Under fire from MPs over his budget, which raised national insurance for self-employed',
            imageSrc: "images/3.jpg"
        },
        {
            id: '16',
            title: 'Fillon’s campaign hit by antisemitism claims',
            summary: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            createdAt: new Date('2017-02-25T13:10:40'),
            tags: ['USA', 'Fillon'],
            author: 'Adam Sage',
            content: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            imageSrc: "images/4.jpg"
        },
        {
            id: '17',
            title: 'South Korea set to cosy up to Kim',
            summary: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            createdAt: new Date('2017-02-27T23:14:15'),
            tags: ['Kim', 'SK'],
            author: 'Philip Sherwell',
            content: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            imageSrc: "images/5.jpg"
        },
        {
            id: '18',
            title: 'Far right seize on Turkey’s confrontation with Europe',
            summary: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            createdAt: new Date('2017-03-04T13:11:15'),
            tags: ['EU', 'Turkey'],
            author: 'Bruno Waterfield',
            content: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            imageSrc: "images/6.jpg"
        }, {
            id: '19',
            title: 'GCHQ: Russian cyber‑threat to British elections',
            summary: 'Spies at GCHQ have called an emergency summit with Britain’s political parties after warning them that they are at risk of Russian cyber-attacks disrupting the next general election.Security sources say GCHQ now regards protecting the political system from foreign hackers as “priority work”. They fear that Kremlin-backed hackers could steal and leak internal emails or publish private databases of voters’ political views in an attempt to damage the standing of political parties with the public.',
            createdAt: new Date('2017-02-27T13:40:10'),
            tags: ['GCHQ', 'Russia'],
            author: 'Kine Shulz',
            content: 'Spies at GCHQ have called an emergency summit with Britain’s political parties after warning them that they are at risk of Russian cyber-attacks disrupting the next general election.Security sources say GCHQ now regards protecting the political system from foreign hackers as “priority work”. They fear that Kremlin-backed hackers could steal and leak internal emails or publish private databases of voters’ political views in an attempt to damage the standing of political parties with the public.',
            imageSrc: "images/1.jpg"
        },
        {
            id: '20',
            title: 'May ‘will ask EU to pay back our £9bn’',
            summary: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun — dramatically cutting Britain’s final bill.Senior government sources say that when the prime minister triggers article 50, she will point out that Britain is entitled to the return of funds held by the European Investment Bank (EIB).',
            createdAt: new Date('2017-02-27T23:11:00'),
            tags: ['USA', 'EU'],
            author: 'Tim Shipman',
            content: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun — dramatically cutting Britain’s final bill.Senior government sources say that when the prime minister triggers article 50, she will point out that Britain is entitled to the return of funds held by the European Investment Bank (EIB).',
            imageSrc: "images/2.jpg"
        },
        {
            id: '21',
            title: 'Prince teases Spreadsheet Phil over budget',
            summary: 'One of them is known for his verbal gaffes and the other was once seen as a safe pair of hands, but when Philip met Philip last week it was the chancellor of the exchequer who was on the receiving end for blundering in public. Under fire from MPs over his budget, which raised national insurance for self-employed',
            createdAt: new Date('2016-02-29T15:10:13'),
            tags: ['EU', 'Prince'],
            author: 'Tim Wilson',
            content: 'One of them is known for his verbal gaffes and the other was once seen as a safe pair of hands, but when Philip met Philip last week it was the chancellor of the exchequer who was on the receiving end for blundering in public. Under fire from MPs over his budget, which raised national insurance for self-employed',
            imageSrc: "images/3.jpg"
        },
        {
            id: '22',
            title: 'Fillon’s campaign hit by antisemitism claims',
            summary: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            createdAt: new Date('2017-02-25T13:10:40'),
            tags: ['USA', 'Fillon'],
            author: 'Adam Sage',
            content: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            imageSrc: "images/4.jpg"
        },
        {
            id: '23',
            title: 'South Korea set to cosy up to Kim',
            summary: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            createdAt: new Date('2017-02-27T23:14:15'),
            tags: ['Kim', 'SK'],
            author: 'Philip Sherwell',
            content: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            imageSrc: "images/5.jpg"
        },
        {
            id: '24',
            title: 'Far right seize on Turkey’s confrontation with Europe',
            summary: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            createdAt: new Date('2017-03-04T13:11:15'),
            tags: ['EU', 'Turkey'],
            author: 'Bruno Waterfield',
            content: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            imageSrc: "images/6.jpg"
        },
        {
            id: '25',
            title: 'Fillon’s campaign hit by antisemitism claims',
            summary: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            createdAt: new Date('2017-02-25T13:10:40'),
            tags: ['USA', 'Fillon'],
            author: 'Adam Sage',
            content: 'François Fillon faced new scandals today with supporters accused of antisemitism and a row over bespoke clothes costing €48,450.Mr Fillon, 63, once the favourite for the French presidency, was forced apologise after his opposition Republicans tweeted a caricature of Emmanuel Macron, the independent centrist.',
            imageSrc: "images/1.jpg"
        },
        {
            id: '26',
            title: 'South Korea set to cosy up to Kim',
            summary: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            createdAt: new Date('2017-02-27T23:14:15'),
            tags: ['Kim', 'SK'],
            author: 'Philip Sherwell',
            content: 'The man poised to become South Korea’s new leader has vowed to “embrace” the communist North in what could further complicate American efforts to rein in Kim Jong-un, North Korea’s increasingly erratic leader. Moon Jae-in is the liberal frontrunner in a South Korean presidential election expected in May after last week’s impeachment of the country’s first female leader. On Friday the constitutional court ratified the removal of Park Geun-hye, a conservative who had taken a hard line against Pyongyang.',
            imageSrc: "images/2.jpg"
        },
        {
            id: '27',
            title: 'Far right seize on Turkey’s confrontation with Europe',
            summary: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            createdAt: new Date('2017-03-04T13:11:15'),
            tags: ['EU', 'Turkey'],
            author: 'Bruno Waterfield',
            content: 'Geert Wilders, the anti-Muslim Dutch MP, threatened today to strip the country’s 400,000 ethnic Turks of their dual citizenship, describing them as a “fifth column”. His call came amid an escalating confrontation between western Europe and Turkey, which has already inflamed Wednesday’s Dutch elections and could overshadow the French presidential poll next month. At the weekend, the Dutch government prevented two Turkish ministers from campaigning in the country',
            imageSrc: "images/3.jpg"
        }
    ];

    function validateArticle(article) {
        try {
            var isArticle = !isNaN(article.id);
            if (typeof article.title !== "string" || article.title.length > 100) {
                isArticle = false;
            }
            if (typeof article.summary !== "string" || article.summary.length > 200) {
                isArticle = false;
            }
            if (typeof article.author !== "string" || article.author.length < 1) {
                isArticle = false;
            }
            if (typeof article.content !== "string" || article.content.length < 1) {
                isArticle = false;
            }
            if (!article.createdAt instanceof Date) {
                isArticle = false;
            }
            if (article.tags.length == 0) {
                isArticle = false;
            }
            else {
                article.tags.forEach(function (currentTag) {
                    if (tags.indexOf(currentTag) == -1) {
                        isArticle = false;
                    }
                })
            }
            for (var i = 0; i < articles.length; i++) {
                if (articles[i] != null) {
                    if (articles[i].id === article.id) {
                        isArticle = false;
                    }
                }
            }
            return isArticle;
        }
        catch (error) {
            console.log('Invalid article');
            return false;
        }
    }

    function getArticle(id) {
        var resultArticle = null;
        articles.forEach(function (currentArticle) {
            if (currentArticle.id == id) {
                resultArticle = currentArticle;
            }
        });
        return resultArticle;
    }

    function addArticle(article) {
        var isAdded = true;
        if (!validateArticle(article)) {
            isAdded = false;
        }
        else {
            articles.push(article);
        }
        return isAdded;
    }

    function copyObject(obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    }

    function editArticle(id, article) {
        try {
            var currentArticle = getArticle(id);
            var removeIndex = articles.indexOf(currentArticle);
            var articleCopy = copyObject(currentArticle);
            var isEdited = true;
            articles[removeIndex] = null;
            for (var key in article) {
                if (articleCopy.hasOwnProperty(key))
                    articleCopy[key] = article[key];
            }
            if (!validateArticle(articleCopy)) {
                isEdited = false;
                articles[removeIndex] = currentArticle;
            }
            else {
                articles[removeIndex] = articleCopy;
            }
            return isEdited;
        }
        catch (ex) {
            console.log("Invalid ID");
        }
    }

    function compareDate(first, second) {
        return first.createdAt < second.createdAt ? 1 : -1;
    }

    function getArticles(skip, top, filterConfig) {
        var resultArticles = [];
        try {
            if (filterConfig == null || Object.keys(filterConfig).length == 0) {
                skip = typeof skip !== 'undefined' ? skip : 0;
                top = typeof top !== 'undefined' ? top : articles.length;
                resultArticles = articles.sort(compareDate).slice(skip, top);
            }
            else {
                for (var key in filterConfig) {
                    articles.forEach(function (currentArticle) {
                        if (currentArticle.hasOwnProperty(key) && currentArticle[key] == filterConfig[key])
                            resultArticles.push(currentArticle);
                    })
                }
                resultArticles.sort(compareDate);
                skip = typeof skip !== 'undefined' ? skip : 0;
                top = typeof top !== 'undefined' ? top : resultArticles.length;
                resultArticles = resultArticles.slice(skip, top);

            }
        }
        catch (ex) {
            console.log("Input error");
        }
        return resultArticles;
    }

    function removeArticle(id) {
        var isRemoved = true;
        var articleToDelete = getArticle(id);
        if (articleToDelete == null) {
            isRemoved = false;
        }
        else {
            articles.splice(articles.indexOf(articleToDelete), 1);
        }
        return isRemoved;
    }

    function addTag(tag) {
        if (tags.indexOf(tag) == -1) {
            tags.push(tag);
        }
    }

    function removeTag(tag) {
        if (tags.indexOf(tag) != -1) {
            tags.splice(articles.indexOf(tag), 1);
        }
    }

    return {
        getArticles: getArticles,
        validateArticle: validateArticle,
        getArticle: getArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        addTag: addTag,
        removeTag: removeTag
    };
}());
var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        ARTICLE_TEMPLATE = document.getElementById('post-template');
        ARTICLE_LIST_NODE = document.getElementById('article-list');
    }

    var renderArticle = function (article, articles) {
        var articleWrap = ARTICLE_TEMPLATE.querySelector('.main-wrap').cloneNode(true);
        var post = articleWrap.querySelector('.main');

        var articleIndex = articles.indexOf(article);
        var column = post.querySelector('.left-top');
        if (user != null)
            column.querySelector('.control-buttons').style.visibility = 'visible';
        column.querySelector('.head-left').innerHTML = article.title;
        column.querySelector('.text-left').innerHTML = article.summary;
        column.querySelector('.tags-left-top').innerHTML = article.tags;
        column.querySelector('.author').innerHTML = article.author;
        column.querySelector('.time').innerHTML = formatDate(article.createdAt);

        if ((article = articles[++articleIndex]) != null) {
            column = post.querySelector('.left-bottom');
            if (user != null)
                column.querySelector('.control-buttons').style.visibility = 'visible';
            column.querySelector('.head-left').innerHTML = article.title;
            column.querySelector('.text-left').innerHTML = article.summary;
            column.querySelector('.tags-left-top').innerHTML = article.tags;
            column.querySelector('.author').innerHTML = article.author;
            column.querySelector('.time').innerHTML = formatDate(article.createdAt);
        }

        if ((article = articles[++articleIndex]) != null) {
            column = post.querySelector('.central');
            if (user != null)
                column.querySelector('.control-buttons').style.visibility = 'visible';
            column.querySelector('.img-central').src = article.imageSrc;
            column.querySelector('.head-central').innerHTML = article.title;
            column.querySelector('.text-central').innerHTML = article.summary;
            column.querySelector('.center').innerHTML = article.tags;
            column.querySelector('.author-center').innerHTML = article.author;
            column.querySelector('.time').innerHTML = formatDate(article.createdAt);
        }
        if ((article = articles[++articleIndex]) != null) {
            column = post.querySelector('.right');
            if (user != null)
                column.querySelector('.control-buttons').style.visibility = 'visible';
            column.querySelector('.img-right').src = article.imageSrc;
            column.querySelector('.head-right').innerHTML = article.title;
            column.querySelector('.text-right').innerHTML = article.summary;
            column.querySelector('.tags-left-top').innerHTML = article.tags;
            column.querySelector('.author').innerHTML = article.author;
            column.querySelector('.time').innerHTML = formatDate(article.createdAt);
        }
        return articleWrap;
    };

    var renderArticleSinglePost = function (article) {
        var ARTICLE_TEMPLATE = document.getElementById('post-template-single');
        var postWrap = ARTICLE_TEMPLATE.querySelector('.main-single-wrap').cloneNode(true);
        var post = postWrap.querySelector('.main-single');
        var column = post.querySelector('.left-single');

        if (user != null)
            column.querySelector('.control-buttons').style.visibility = 'visible';
        column.querySelector('.head-single').innerHTML = article.title;
        column.querySelector('.text-single').innerHTML = article.summary;
        column.querySelector('.tags-left-top').innerHTML = article.tags;
        column.querySelector('.author').innerHTML = article.author;
        column.querySelector('.time').innerHTML = formatDate(article.createdAt);
        return postWrap;
    };

    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    function renderArticles() {
        var articles = articleModel.getArticles(undefined, undefined, null);
        var remainder = articles.length % 4;
        for (var i = 0; i < articles.length - remainder; i += 4) {
            ARTICLE_LIST_NODE.appendChild(renderArticle(articles[i], articles));
        }
        for (i = remainder; i > 0; i--) {
            ARTICLE_LIST_NODE.appendChild(renderArticleSinglePost(articles[articles.length - i]));
        }
    }

    function renderHeader() {
        if (user != null) {
            document.querySelector('.login-bar').lastElementChild.innerHTML = user;
            document.querySelector('.button-sign').innerHTML = 'Sing out';
            document.querySelector('.button-add').style.visibility = 'visible';
        }
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function renderFilter() {
        var articles = articleModel.getArticles(undefined, undefined, null);
        var authorArray = [];
        for (var i = 0; i < articles.length; i++) {
            authorArray.push(articles[i].author);
        }
        var unique = authorArray.filter(onlyUnique);
        var master = document.querySelector('.filter');
        for (i = 0; i < unique.length; i++) {
            master.options[master.options.length] = new Option(unique[i], "value", true, false);
        }
    }

    function insertArticleInDom(article) {
        articleModel.addArticle(article);
        removeArticlesFromDom();
        renderArticles();

    }

    function removeArticlesFromDom() {
        document.getElementById('article-list').innerHTML = '';
    }

    function removeArticleFromDom(id) {
        articleModel.removeArticle(id);
        removeArticlesFromDom();
        renderArticles();
    }

    function editArticleInDom(id, article) {
        articleModel.editArticle(id, article);
        removeArticlesFromDom();
        renderArticles();
    }

    return {
        init: init,
        renderArticles: renderArticles,
        renderHeader: renderHeader,
        renderFilter: renderFilter,
        insertArticleInDom: insertArticleInDom,
        removeArticleFromDom: removeArticleFromDom,
        removeArticlesFromDom: removeArticlesFromDom,
        editArticleInDom: editArticleInDom

    }
}());
document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    articleRenderer.init();
    articleRenderer.renderArticles();
    articleRenderer.renderHeader();
    articleRenderer.renderFilter();
    articleRenderer.removeArticlesFromDom();
    var validArticle = {
        id: '30',
        title: 'NEWARTICLE',
        summary: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun',
        createdAt: new Date('2017-02-27T23:10:54'),
        tags: ['USA', 'Minsk'],
        author: 'Alex Fine',
        content: 'Theresa May will call on Brussels to hand back £9bn of UK assets held by an EU bank when she fires the Brexit starting gun',
        imageSrc: "images/1.jpg"


    };
    var changeArticle = {
        title: 'BRANDNEW'
    };
    articleRenderer.insertArticleInDom(validArticle);
    articleRenderer.removeArticleFromDom(30);
    articleRenderer.insertArticleInDom(validArticle);
    articleRenderer.editArticleInDom(30, changeArticle);


}

function filterShow() {
    var div = document.querySelector('.cd-filter');
    div.style.display = 'block';
}