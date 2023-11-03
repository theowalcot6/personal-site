/* OpenSea Images */
import logo from './ProjectDataImages/opensea-logo.png'
import widelogo from './ProjectDataImages/opensea-wide-logo.png'
import photo1 from './ProjectDataImages/nft1.jpg'
import photo3 from './ProjectDataImages/nft2.jpg'
import photo2 from './ProjectDataImages/my-nft.png'

/* Plant Pathology Images */
import logo1 from './ProjectDataImages/kaggle-logo.png'
import widelogo1 from './ProjectDataImages/kaggle-wide-logo.png'
import plant1 from './ProjectDataImages/plant1.jpeg'
import plant2 from './ProjectDataImages/plant2.jpeg'
import plant3 from './ProjectDataImages/plant3.jpeg'

/* Mammogram Images */
import mam1 from './ProjectDataImages/small-mam.png'
import mam2 from './ProjectDataImages/small-mam1.png'
import mam3 from './ProjectDataImages/small-mam2.png'

const ProjectData = [
    {
        name :'gan-nft',
        logo : widelogo,
        role :'Data Scientist',
        duration : '2 weeks',
        tools : 'Pytorch',
        team : 'Open Sea',
        big_logo : logo,
        code : 'https://colab.research.google.com/drive/1bwqNIUFEKwdj2jH0B1M89M5NkxAVotSY?usp=share_link',
        title : 'OpenSea',
        secondary_title : 'Generative Adversarial Network used to produce NFTs.',
        description : 'I worked as a Data Scientist and AI engineer as part of a research project exploring the possibility of generating NFTs using a GAN.',
        secondary_description : 'I had an amazing experience working on various projects throughout the experience and spent three weeks on this keystone project. The project’s goal was to evaluate the effectiveness of generating NFTs using training data pulled from OpenSea, the largest NFT marketplace. This evaluation had a commercial lense on it, with the hope of using this technology to generate NFTs that could be sold back on the marketplace.',
        photo1 : photo1,
        photo2 : photo2,
        photo3 : photo3,
        overview: 'Generative Adversarial Networks (GANs) are powerful machine learning models capable of generating realistic image, video, and voice outputs. Rooted in game theory, GANs have wide-spread application: from improving cybersecurity by fighting against adversarial attacks and anonymizing data to preserve privacy to generating state-of-the-art images, colorizing black and white images, increasing image resolution, creating avatars, turning 2D images to 3D, and more.',
        stakeholder: 'This stakeholder wanted me to build a basic GAN using PyTorch, which then added further convolutional layers to become a more advanced DCGAN that could process the images provided. As this project was more research than outcome-driven, stakeholder management was fairly minimal but I was proactive in my reporting of the project and held regular catch ups with the project lead to communicate progress.',
        data : 'I built a scraping tool that scrolled through the image feeds on OpenSea and saved them into my storage destination. I was using Google Colab for this project mostly, back when the Colab GPUs were much cheaper, so the scraping script fed into my Google Drive which I then used to store the images.',
        data_cleaning : 'The data cleaning process involved ingesting the images into Pytorch tensors. I then had to convert all the images into standard widths, heights and channels to feed into the Discriminator. I also applied some advanced data augmentation methods to improve the training by providing a more broad training set.',
        modelling : "I then developed a Generator, whose job it was to generate an image that the Discriminator couldn't figure out was fake, and a Discriminator, whose job it was to guess that the Generators were fake. The Discriminators loss function was linked to the answers it got wrong and the Generators loss function was linked to the answers the Discriminator got right so that the back propogation algorithm would force both these models to get better at these jobs.",
        key_points: 'The Generator was then evaluated using random Gaussian noise, and then the image was converted back from torch tensors into an actual image (you can see a collection of them in the middle image above). The images were from a broad distribution so without extensive training and the use of parallel GPUs it would be tough to convert onto a solution of HD NFTs. However, as this was more of a research piece, we stopped after seeing some interesting results. As you can see from the images, the Generator started picking up on broad colours and eye shapes, along with a focus on the middle pixels.',
        next_steps : 'The project was completed and the findings written up, which was continued by another developer as I rolled off. My advice was to focus on a more constricted distribution if they wanted to go commercial and also to apply a deep learning upscaler to turn the 280 x 280 image into something more HD. I also agreed to work in future with the same stakeholder on the same problem statement but using a diffusion model instead (more on that later...)',
        links : 'gan-nft',
        background: 'b1'
    },
    {
        name :'plant-pathology',
        logo : widelogo1,
        role :'Data Scientist',
        duration : '2 weeks',
        tools : 'Keras, Tensorflow, Jupyter Notebook',
        team : 'N/A',
        big_logo : logo1,
        code : 'https://www.kaggle.com/code/theowalcot/transfer-learning-off-vgg16-feature-extraction',
        title : 'Kaggle',
        secondary_title : 'Using classification to diagnose Plant Pathology',
        description : 'I worked as a Data Scientist and AI engineer on this famous Kaggle competition to see where in the leaderboard I could score!',
        secondary_description : 'Kaggle, a subsidiary of Google LLC, is an online community of data scientists and machine learning practitioners. Kaggle allows users to find and publish data sets, explore and build models in a web-based data-science environment, work with other data scientists and machine learning engineers, and enter competitions to solve data science challenges.',
        photo1 : plant1,
        photo2 : plant2,
        photo3 : plant3,
        overview: 'Misdiagnosis of the many diseases impacting agricultural crops can lead to misuse of chemicals leading to the emergence of resistant pathogen strains, increased input costs, and more outbreaks with significant economic loss and environmental impacts. Current disease diagnosis based on human scouting is time-consuming and expensive, and although computer-vision based models have the promise to increase efficiency, the great variance in symptoms due to age of infected tissues, genetic variations, and light conditions within trees decreases the accuracy of detection. Objectives of ‘Plant Pathology Challenge’ are to train a model using images of training dataset to 1) Accurately classify a given image from testing dataset into different diseased category or a healthy leaf; 2) Accurately distinguish between many diseases, sometimes more than one on a single leaf; 3) Deal with rare classes and novel symptoms; 4) Address depth perception—angle, light, shade, physiological age of the leaf; and 5) Incorporate expert knowledge in identification, annotation, quantification, and guiding computer vision to search for relevant features during learning.',
        stakeholder: 'Stakeholders are minimal in an online competition but any code is scored on the Kaggle test data and peer reviewed by the Kaggle community.',
        data : 'The Data Collection is provided by the Kaggle community and involves 3642 images of plants, whether or not they had an illness and what type of illness they had. Given this information and provided with new images of leaves, could I predict the leaf health using a trained algorithm.',
        data_cleaning : 'The images were loaded into a standardly sized array using keras processing which was then used as a training set. I set up cross validation as well to keep an eye on accuracy as we are training our model.',
        modelling : "Bill Gates once said 'I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.' and in that vein we attempted to use transfer learning to solve this problem. VGG16 is a is object detection and classification algorithm which is able to classify 1000 images of 1000 different categories with 92.7% accuracy and so has a brilliant understanding of imagery and in particular plants. We modelled our model of VGG16 using feature extraction and training a new 5-layered head to classify leaves into their different illness states.",
        key_points: 'The model achieved a 99.92% accuracy on the training set and 80% validation accuracy after 10 epochs.',
        next_steps : 'If I were looking to improve on the Kaggle score, I would first tackle the overfitting that seems to be happening with our model. I would look at introducing advanced data augmentation techniques as VGG16 already utilizes regularisation.',
        links : 'plant-pathology',
        background: 'b2'
    },
    {
        name :'mammogram-cnn',
        logo : widelogo1,
        role :'Data Scientist',
        duration : '3 weeks',
        tools : 'Pytorch',
        team : 'N/A',
        big_logo : logo1,
        code : 'https://www.kaggle.com/code/theowalcot/rsna-screening-mammography',
        title : 'Kaggle',
        secondary_title : 'Finding breast cancers in screening mammograms',
        description : 'I worked as a Data Scientist and AI engineer on this Kaggle competition to see where in the leaderboard I could score!',
        secondary_description : 'Kaggle, a subsidiary of Google LLC, is an online community of data scientists and machine learning practitioners. Kaggle allows users to find and publish data sets, explore and build models in a web-based data-science environment, work with other data scientists and machine learning engineers, and enter competitions to solve data science challenges.',
        photo1 : mam1,
        photo2 : mam2,
        photo3 : mam3,
        overview: 'According to the WHO, breast cancer is the most commonly occurring cancer worldwide. In 2020 alone, there were 2.3 million new breast cancer diagnoses and 685,000 deaths. Yet breast cancer mortality in high-income countries has dropped by 40% since the 1980s when health authorities implemented regular mammography screening in age groups considered at risk. Early detection and treatment are critical to reducing cancer fatalities, and your machine learning skills could help streamline the process radiologists use to evaluate screening mammograms. Currently, early detection of breast cancer requires the expertise of highly-trained human observers, making screening mammography programs expensive to conduct. A looming shortage of radiologists in several countries will likely worsen this problem. Mammography screening also leads to a high incidence of false positive results. This can result in unnecessary anxiety, inconvenient follow-up care, extra imaging tests, and sometimes a need for tissue sampling (often a needle biopsy).',
        stakeholder: 'Stakeholders are minimal in an online competition but any code is scored on the Kaggle test data and peer reviewed by the Kaggle community.',
        data : 'The Data Collection is provided by the Kaggle community and contains roughly 20,000 groupings allowing for a training set. Given two mammograms (MLO and CC view), could I predict the pathology of the breast using a trained algorithm.',
        data_cleaning : "The data was stored in DCMs (which is the standard for mammograms) and the images were jpeg lossless meaning we required a specialized library to deconstruct the image into a tensor, so I used the SITK library. The DICOM images were converted to grayscale images and the intensity distribution of all jpg images were adjusted via histogram equalization using Open CV. Images were resized to 512 x 512 (with two channels to combine the different views) to fit the input of the model. Each image was then normalized between 0 and 1. The rows themselves were grouped into patient's indidivual breasts as per the objective of the competition.",
        modelling : 'The model consisted of 10 convolutions (4 shrinking convolutions), 10 Relu layers, 5 max pools and a tail with a softmax function. Training was done over 25 epochs, using a DataLoader, the Adam optimizer and the Cross Entropy loss function. As you can see in the code this is a fairly simple model for this objective and was really only meant as a baseline.',
        key_points: 'The model was achieving 0.5 cross entropy loss when training stopped. I stopped the training as this seemed to be flattening across batches so I thought it time to focus on the next steps.',
        next_steps : "The model had two main issues: simplicity and storage. The model was underfitting on the training data which classically means the model needs to up it's complexity. Part 2 of this project will focus on Network Architecture Search using AutoML where possible. The model was also running out of the available RAM storage Kaggle was offering. Part 2 of this project will also focus on caching the data where possible.",
        links : 'mammogram-cnn',
        background : 'b3'
    },

]

export default ProjectData;